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

        public ComponentesController()
        {
            context = new seygreContext();
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
                        orderby e.Id descending
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


        [HttpPost("[action]")]
        public List<RelacionResiduosClasificacion> ObtenerBusquedaPersonalizada([FromBody] RelacionResiduosClasificacion r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Residuos
                        join l in context.Clasificacion
                        on e.IdClasificacion equals l.Id
                        where e.Nombre.Contains(r.Nombre)
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
        [HttpPost("[action]")]
        public List<int> ObtenerInformacionBarras([FromBody] Residuos r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            int max_year = (from e in context.Residuos select e.Fecha).Distinct().Count();

            int[] year = { 2019, 2020, 2021, 2022, 2023 };
            int[] datos = new int[5];
            int i = 0;


            foreach (var y in year)
            {
              
                    datos[i] = (from e in context.Residuos where e.Fecha.Value.Year.Equals(y) && e.IdCentroAcopio.Equals(r.Id) select e).Count();
                    i += 1;                

            }

            return datos.ToList();

        }

        //OBTENER PIE
       [HttpPost("[action]")]
        public List<int> ObtenerInformacionCircular([FromBody] Residuos r)
        {
            int[] clasifi = { 1, 2, 3 };
            int[] datos = new int[3];
            int i = 0;

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            foreach (var c in clasifi)
            {

                datos[i] = (from e in context.Residuos where e.IdClasificacion.Equals(c) && e.IdCentroAcopio.Equals(r.Id) select e).Count();
                i += 1;

            }

            return datos.ToList();

        }



        //OBTENER PIE
        [HttpPost("[action]")]
        public List<int> ObtenerInformacionRadar([FromBody] Residuos r)
        {
            int[] clasifi = { 1, 2, 3 };
            int[] datos = new int[1];
            int i = 0;
            
            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;
         
            datos[1] = (from e in context.Residuos select e.IdClasificacion.Value).Sum();

            return datos.ToList();
      

           /* foreach (var c in clasifi)
            {

                datos[i] = (from e in context.Residuos where e.IdClasificacion.Equals(c) && e.IdCentroAcopio.Equals(r.Id) select e).Count();
                i += 1;

            }

            return datos.ToList();
            */
        }


    }

}
