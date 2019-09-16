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
    public class EventosController : ControllerBase
    {

        private seygreContext context;

        public EventosController(seygreContext _context)
        {
            context = _context;
        }


        [HttpPost("[action]")]
        public void InsertarEvento([FromBody] Eventos r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            context.Eventos.Add(r);

            context.SaveChanges();

        }


        [HttpGet("[action]")]
        public List<RelacionEventosEstatusCentro> ObtenerEvento(int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Eventos
                        join l in context.Estatus
                        on e.IdEstatus equals l.Id
                        where e.IdCentroAcopio == id
                        orderby e.Id descending
                        select new RelacionEventosEstatusCentro
                        {

                            Id = e.Id,
                            Nombre = e.Nombre,
                            Organizador = e.Organizador,
                            HorarioInicio = e.HorarioInicio,
                            HorarioFinal = e.HorarioFinal,
                            Telefono = e.Telefono,
                            Fecha = e.Fecha.Value.ToString("yyyy-MM-dd"),
                            Estatus= l.Titulo,
                            IdEstatus = e.IdEstatus
                            

                        }).Take(10).ToList();

            return list;

        }



        [HttpPost("[action]")]
        public List<RelacionEventosEstatusCentro> ObtenerBusquedaPersonalizada([FromBody] RelacionEventosEstatusCentro r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Eventos
                        join l in context.Estatus
                        on e.IdEstatus equals l.Id
                        where (e.Nombre.Contains(r.Busqueda) || e.Organizador.Contains(r.Busqueda) || e.Fecha.ToString().Contains(r.Busqueda) || e.Telefono.ToString().Contains(r.Busqueda) || e.HorarioFinal.ToString().Contains(r.Busqueda) || e.HorarioInicio.ToString().Contains(r.Busqueda) || l.Titulo.Contains(r.Busqueda)) && e.IdCentroAcopio.Equals(r.Id)

                        select new RelacionEventosEstatusCentro
                        {
                            Id = e.Id,
                            Nombre = e.Nombre,
                            Organizador = e.Organizador,
                            HorarioInicio = e.HorarioInicio,
                            HorarioFinal = e.HorarioFinal,
                            Telefono = e.Telefono,
                            Fecha = e.Fecha.Value.ToString("yyyy-MM-dd"),
                            Estatus = l.Titulo,
                            Latitud = e.Latitud,
                            Longitud = e.Longitud,
                            IdEstatus = e.IdEstatus

                        }).Take(30).ToList();

            return list;

        }




        [HttpGet("[action]")]
        public List<RelacionEventosEstatusCentro> ObtenerUbicacionEvento(int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Eventos

                        join l in context.Estatus
                        on e.IdEstatus equals l.Id

                        join g in context.Centrosacopio
                        on e.IdCentroAcopio equals g.Id
                        

                        where e.IdCentroAcopio == id && e.IdEstatus.Equals(1)
                        select new RelacionEventosEstatusCentro
                        {


                            Nombre = e.Nombre,
                            Organizador = e.Organizador,
                            HorarioInicio = e.HorarioInicio,
                            HorarioFinal = e.HorarioFinal,
                            Telefono = e.Telefono,
                            Fecha = e.Fecha.Value.ToString("yyyy-MM-dd"),
                            Latitud = e.Latitud,
                            Longitud = e.Longitud,
                            NombreCentro = g.Nombre,
                            Estatus = l.Titulo,
                            

                        }).ToList();

            return list;

        }




        [HttpPost("[action]")]
        public void ModificarEvento([FromBody] Eventos r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            //var found = (from e in context.Personal where e.Id.Equals(r.Id) select e).ToList();
            var found = context.Eventos.Find(r.Id);

            if (r.Nombre != null)
            {
                found.Nombre = r.Nombre;
            }
            if (r.Organizador != null)
            {
                found.Organizador = r.Organizador;
            }
            if (r.HorarioInicio != null)
            {
                found.HorarioInicio = r.HorarioInicio;
            }
            if (r.HorarioFinal != null)
            {
                found.HorarioFinal = r.HorarioFinal;
            }
            if (r.Telefono != null)
            {
                found.Telefono = r.Telefono;
            }
            if (r.Fecha != null)
            {
                found.Fecha = r.Fecha;
            }
            if(found.IdEstatus != null) {

                found.IdEstatus = r.IdEstatus;
            }



            context.Update(found);

            context.SaveChanges();



        }


        [HttpPost("[action]")]
        public int EliminarEvento([FromBody] int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Eventos.Find(id);

            context.Eventos.Remove(found);

            context.SaveChanges();

            return 1;

        }


    }


}
