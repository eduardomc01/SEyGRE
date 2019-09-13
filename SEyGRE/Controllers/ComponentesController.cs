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

        /*
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
                            IdClasificacion = e.IdClasificacion,
                            Fecha = e.Fecha.Value.Date

                        }).Take(3).ToList();

            return list;

        }
        */



        [HttpGet("[action]")]
        public List<RelacionResiduosClasificacion> ObtenerResiduos(int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Residuos

                        join l in context.Clasificacion
                        on e.IdClasificacion equals l.Id

                        join f in context.Etapas
                        on e.IdEtapa equals f.Id

                        where e.IdCentroAcopio == id
                        orderby e.Id descending
                        select new RelacionResiduosClasificacion
                        {

                            Id = e.Id,
                            Nombre = e.Nombre,
                            Peso = e.Peso,
                            Clasificacion = l.Titulo,
                            IdClasificacion = e.IdClasificacion,

                            IdEtapa = f.Id,
                            Etapa = f.Nombre,


                            Fecha = e.Fecha.Value.ToString("yyyy-MM-dd")

                        }).Take(30).ToList();

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
                            IdClasificacion = e.IdClasificacion,
                            Fecha = e.Fecha.Value.ToString("dd/MM/yyyy")

                        }).Take(5).ToList();

            return list;

        }


        [HttpPost("[action]")]
        public List<RelacionResiduosClasificacion> ObtenerBusquedaPersonalizada([FromBody] RelacionResiduosClasificacion r) {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Residuos
                        join l in context.Clasificacion
                        on e.IdClasificacion equals l.Id

                        join f  in context.Etapas
                        on e.IdEtapa equals f.Id

                        where (e.Nombre.Contains(r.Busqueda) || e.Peso.ToString().Contains(r.Busqueda) || e.Fecha.ToString().Contains(r.Busqueda) || l.Titulo.Contains(r.Busqueda)) && e.IdCentroAcopio.Equals(r.Id)

                        select new RelacionResiduosClasificacion
                        {

                            Id = e.Id,
                            Nombre = e.Nombre,
                            Peso = e.Peso,
                            Clasificacion = l.Titulo,
                            IdEtapa = f.Id,
                            Etapa = f.Nombre,
                            IdClasificacion = e.IdClasificacion,
                            Fecha = e.Fecha.Value.ToString("yyyy-MM-dd") /* verificando la fecha para el date en el html en los input */

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



        //OBTENER STATS NUEVO
        [HttpGet("[action]")]
        public List<float[]> ObtenerInformacionBarras2(int id)/* obtener solo los toneladas alrrato acuerdate */
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            //int max_year = (from e in context.Residuos select e.Fecha).Distinct().Count();

            int[] year = { 2019, 2020, 2021, 2022, 2023, 2024, 2025 };
            float[] datosk = new float[7];
            float[] datost = new float[7];
            int i = 0;

            //var year = (from e in context.Residuos select e.Fecha.Value.Year);


            var result = (from e in context.Residuos where e.IdCentroAcopio.Equals(id) select e);
            foreach (var y in year)
            {
                foreach (var r in result)
                {

                    if (r.Fecha.Value.Year.Equals(y))
                    {
                        datosk[i] += r.Peso;
                        datost[i] += (r.Peso / 1000); /* el Kg. obtenido lo convierto a t  1kg. = 0.001t */
                    }

                }

                i += 1;

            }


            return new List<float[]> { datosk , datost };

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
        public async Task<List<float>> ObtenerInformacionPolar()
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


            var result = await Task.Run(() => {

                return (from e in context.Residuos where e.IdCentroAcopio.Equals(id) select e);

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





        [HttpPost("[action]")]
        public void ModificarComponente([FromBody] Residuos r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            //var found = (from e in context.Personal where e.Id.Equals(r.Id) select e).ToList();
            var found = context.Residuos.Find(r.Id);

            if (r.Nombre != null)
            {
                found.Nombre = r.Nombre;
            }
            if (r.Peso != 0.0)
            {
                found.Peso = r.Peso;
            }
            if (r.IdClasificacion != null)
            {
                found.IdClasificacion = r.IdClasificacion;
            }
            if (r.Fecha != null)
            {
                found.Fecha = r.Fecha.Value.Date;
            }


            context.Update(found);

            context.SaveChanges();



        }





        [HttpPost("[action]")]
        public void ModificarEstadoReciclaje([FromBody] Residuos r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Residuos.Find(r.Id);

            if (r.IdEtapa != null)
            {
                found.IdEtapa = r.IdEtapa;
            }


            context.Update(found);

            context.SaveChanges();



        }



    }


}



