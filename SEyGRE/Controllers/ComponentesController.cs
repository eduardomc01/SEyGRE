﻿using System;
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
    public class ComponentesController : ControllerBase
    {
        private seygreContext context;

        public ComponentesController(seygreContext _context)
        {
            context = _context;
        }

        [HttpPost("[action]")]
        public void InsertarComponentes([FromBody] Residuos r) {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            context.Residuos.Add(r);

            context.SaveChanges();

        }


        [HttpPost("[action]")]
        public List<RelacionResiduosClasificacion> ObtenerResiduos([FromBody] RelacionResiduosClasificacion r) {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Residuos
                        join l in context.Clasificacion
                        on e.IdClasificacion equals l.Id
                        where e.IdCentroAcopio == r.Id
                        orderby e.Id ascending
                        select new RelacionResiduosClasificacion
                        {

                            Id = e.Id,
                            Nombre = e.Nombre,
                            Peso = e.Peso,
                            Clasificacion = l.Titulo,
                            Fecha = e.Fecha

                        }).Take(3).ToList();

            return list;

        }




        [HttpGet("[action]")]
        public List<RelacionResiduosClasificacion> ObtenerTopResiduos(int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Residuos
                        join l in context.Clasificacion
                        on e.IdClasificacion equals l.Id
                        where e.IdCentroAcopio == id
                        orderby e.Id descending
                        select new RelacionResiduosClasificacion
                        {

                            Id = e.Id,
                            Nombre = e.Nombre,
                            Peso = e.Peso,
                            Clasificacion = l.Titulo,
                            Fecha = e.Fecha

                        }).Take(5).ToList();

            return list;

        }


        [HttpPost("[action]")]
        public List<RelacionResiduosClasificacion> ObtenerBusquedaPersonalizada([FromBody] RelacionResiduosClasificacion r) {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Residuos
                        join l in context.Clasificacion
                        on e.IdClasificacion equals l.Id
                        where (e.Nombre.Contains(r.Busqueda) || e.Peso.ToString().Contains(r.Busqueda) || e.Fecha.ToString().Contains(r.Busqueda) || l.Titulo.Contains(r.Busqueda)) && e.IdCentroAcopio.Equals(r.Id)

                        select new RelacionResiduosClasificacion
                        {

                            Id = e.Id,
                            Nombre = e.Nombre,
                            Peso = e.Peso,
                            Clasificacion = l.Titulo,
                            Fecha = e.Fecha

                        }).ToList();

            return list;

        }


        [HttpPost("[action]")]
        public int EliminarComponente([FromBody] int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Residuos.Find(id);

            context.Residuos.Remove(found);

            context.SaveChanges();

            return 1;

        }


        //OBTENER STATS
        [HttpGet("[action]")]
        public async Task<float[]> ObtenerInformacionBarras(int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            //int max_year = (from e in context.Residuos select e.Fecha).Distinct().Count();

            int[] year = { 2019, 2020, 2021, 2022, 2023, 2024, 2025 };
            float[] datos = new float[7];
            int i = 0;

  
            var result = await Task.Run(() =>
            {
                return ((from e in context.Residuos where e.IdCentroAcopio.Equals(id) select e));
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
        public async Task<int[]> ObtenerInformacionCircular(int id)
        {

            int[] clasifi = { 1, 2, 3 };
            int[] datos = new int[3];
            int i = 0;

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            foreach (var c in clasifi)
            {

                datos[i] = await Task.Run(() =>
                {
                    return ((from e in context.Residuos where e.IdClasificacion.Equals(c) && e.IdCentroAcopio.Equals(id) select e).Count());
                });

                i += 1;

            }

            return datos;

        }



        //OBTENER POLAR
        [HttpGet("[action]")]
        public async Task<List<float>> ObtenerInformacionRadar()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;


            var datos = await Task.Run(() => {

                return (from e in context.Elementos select e.Porcentaje);

            });

            return datos.ToList();

        }


        //OBTENER LINEAR
        [HttpGet("[action]")]
        public async Task<float[]> ObtenerInformacionLinear(int id)
        {
            int[] month = { 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12 };
            float[] datos = new float[13];
           
            int i = 0;
      
            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var result = (from e in context.Residuos where e.IdCentroAcopio.Equals(id) select e);

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



    }

}

