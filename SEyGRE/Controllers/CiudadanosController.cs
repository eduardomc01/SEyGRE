using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using SEyGRE.Models;

namespace SEyGRE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CiudadanosController : ControllerBase
    {

        private seygreContext context;

        public CiudadanosController(seygreContext _context)
        {
            context = _context;
        }


        [HttpGet("[action]")]
        public List<Noticias> ObtenerNoticias()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;


            var list = (from e in context.Noticias select e).ToList();


            return list;

        }



        //OBTENER STATS
        [HttpGet("[action]")]
        public async Task<float[]> ObtenerInformacionBarras(string busqueda)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            //int max_year = (from e in context.Residuos select e.Fecha).Distinct().Count();

            int[] year = { 2019, 2020, 2021, 2022, 2023, 2024, 2025 };
            float[] datos = new float[7];
            int i = 0;


            var result = await Task.Run(() =>
            {
                return ((from e in context.Residuos
                         join l in context.Centrosacopio
                         on e.IdCentroAcopio equals l.Id
                         where l.Nombre.Contains(busqueda)
                         select e));

            });


            foreach (var y in year)
            {
                foreach (var r in result)
                {

                    if (r.Fecha.Value.Year.Equals(y))
                    {
                        datos[i] += r.Peso;
                    }

                }

                i += 1;

            }


            return datos;

        }



        //OBTENER PIE
        [HttpGet("[action]")]
        public async Task<int[]> ObtenerInformacionCircular(string busqueda)
        {

            int[] clasifi = { 1, 2, 3 };
            int[] datos = new int[3];
            int i = 0;

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            foreach (var c in clasifi)
            {

                datos[i] = await Task.Run(() =>
                {
                    return (from e in context.Residuos
                            join l in context.Centrosacopio
                            on e.IdCentroAcopio equals l.Id
                            where e.IdClasificacion.Equals(c) && l.Nombre.Contains(busqueda)
                            select e).Count();
                });

                i += 1;

            }

            return datos;

        }




        //OBTENER LINEAR 1
        [HttpGet("[action]")]
        public async Task<float[]> ObtenerInformacionLinear(string busqueda)
        {
            int[] month = { 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12 };
            float[] datos = new float[13];
            int i = 0;

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;


            var result = await Task.Run(() => {

                return (from e in context.Residuos
                        join l in context.Centrosacopio
                        on e.IdCentroAcopio equals l.Id
                        where l.Nombre.Contains(busqueda)
                        select e);
            });

            //e.Fecha.Value.Month.Equals(m)

            foreach (var m in month)
            {
                foreach (var r in result)
                {

                    if (r.Fecha.Value.Month.Equals(m))
                    {
                        datos[i] += r.Peso;
                    }

                }

                i += 1;

            }


            return datos;

        }







        //OBTENER POLAR
        [HttpGet("[action]")]
        public async Task<List<float>> ObtenerInformacionPolar()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;


            var datos = await Task.Run(() => {

                return (from e in context.Elementos select e.Porcentaje);

            });

            return datos.ToList();

        }





        [HttpGet("[action]")]
        public List<RelacionEventosEstatusCentro> ObtenerUbicacionEventoPersonalizable(string busqueda)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Eventos

                        join l in context.Estatus
                        on e.IdEstatus equals l.Id

                        join g in context.Centrosacopio
                        on e.IdCentroAcopio equals g.Id


                        where e.Nombre.Contains(busqueda)
                        select new RelacionEventosEstatusCentro
                        {

                            Nombre = e.Nombre,
                            Organizador = e.Organizador,
                            Horario = e.Horario,
                            Fecha = e.Fecha.Value.ToString("yyyy-MM-dd"),
                            Latitud = e.Latitud,
                            Longitud = e.Longitud,
                            NombreCentro = g.Nombre,
                            Estatus = l.Titulo,


                        }).ToList();

            return list;

        }


        //OBTENER LINEAR 2 
        [HttpGet("[action]")]
        public JsonResult ObtenerInformacionLinear2()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            List<string> centros = new List<string>();
            List<float?> kg = new List<float?>();
            List<float?> t = new List<float?>();

            float? acumulador = 0.0f;
            float? acumuladorT = 0.0f;

            var query = (from e in context.Centrosacopio where e.Id != 1 select e).ToList();

            foreach (var n in query)
            {

                centros.Add(n.Nombre);

            }


            var ewaste = (from e in context.Centrosacopio

                          join l in context.Residuos
                          on e.Id equals l.IdCentroAcopio

                          select new RelacionCentrosResiduos
                          {

                              NombreCentro = e.Nombre,
                              NombreResiudo = l.Nombre,
                              Peso = l.Peso,
                              Fecha = l.Fecha.Value.ToString("yyyy-MM-dd")

                          }).ToList();


            foreach (var c in centros)
            {

                foreach (var e in ewaste)
                {

                    if (c.Contains(e.NombreCentro))
                    {

                        acumulador += e.Peso;
                        acumuladorT += e.Peso / 1000;

                    }

                }

                kg.Add(acumulador);
                t.Add(acumuladorT);

                acumulador = 0.0f;
                acumuladorT = 0.0f;

            }


            return new JsonResult(new Prueba()
            {

                Centros = centros,
                Peso = kg,
                PesoT = t


            });

        }




        //OBTENER LINEAR 2 
        [HttpGet("[action]")]
        public JsonResult ObtenerInformacionBarras2()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            List<int> eventos = new List<int>();
            List<string> centros = new List<string>();

            int acumulador = 0;

            var query = (from e in context.Centrosacopio where e.Id != 1 select e).ToList();

            foreach (var n in query)
            {

                centros.Add(n.Nombre);

            }


            var query_eventos = (from e in context.Eventos

                                 join l in context.Centrosacopio
                                 on e.IdCentroAcopio equals l.Id

                                 select new RelacionCentrosAcopioEventos {

                                     Id = e.Id,
                                     Nombre = l.Nombre,
                                     idEvento = e.Id,
                                     NombreEvento = e.Nombre

                                 }).ToList();


            foreach (var c in centros)
            {

                foreach (var e in query_eventos)
                {

                    if (c.Contains(e.Nombre))
                    {

                        acumulador += 1;

                    }

                }
                eventos.Add(acumulador);
                acumulador = 0;

            }


            return new JsonResult(new Prueba()
            {

                Centros = centros,
                Eventos = eventos


            });

        }




    }


}



public class Prueba
{

    public List<string> Centros;
    public List<float?> Peso;
    public List<float?> PesoT;

    public List<int> Eventos;


}


