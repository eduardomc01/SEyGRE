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
    public class PersonalController : ControllerBase
    {

        private seygreContext context;

        public PersonalController (seygreContext _context)
        {
            context = _context;

        }


        [HttpPost("[action]")]
        public void AgregarPersonal([FromBody] Personal r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            context.Personal.Add(r);

            context.SaveChanges();

        }



        [HttpPost("[action]")]
        public void EliminarPersonal([FromBody] int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Personal.Find(id);

            context.Personal.Remove(found);

            context.SaveChanges();

        }



        [HttpPost("[action]")]
        public void ModificarPersonal([FromBody] Personal r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            //var found = (from e in context.Personal where e.Id.Equals(r.Id) select e).ToList();
            var found = context.Personal.Find(r.Id);

            if(r.Nombre != null)
            {
                found.Nombre = r.Nombre;
            }
            if(r.Apellidos != null)
            {
                found.Apellidos = r.Apellidos;
            }
            if (r.Edad != null)
            {

                found.Edad = r.Edad;
            }
            if (r.Direccion != null)
            {

                found.Direccion = r.Direccion;
            }
            if (r.IdCargo != null)
            {
                found.IdCargo = r.IdCargo;
            }

            context.Update(found);

            context.SaveChanges();

           

        }


        [HttpGet("[action]")]
        public List<RelacionPersonalCargos> ObtenerPersonal(int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Personal
                        join l in context.Cargo
                        on e.IdCargo equals l.Id
                        where e.IdCentro.Equals(id)
                        select new RelacionPersonalCargos {

                            Id = e.Id,
                            Nombre = e.Nombre,
                            Apellidos = e.Apellidos,
                            Edad = e.Edad,
                            Direccion = e.Direccion,
                            IdCargo = e.IdCargo,
                            Cargo = l.Nombre

                        }).Take(10).ToList();

            return list;
           
        }




        [HttpPost("[action]")]
        public List<RelacionPersonalCargos> ObtenerBusquedaPersonalizadaPersonal([FromBody] RelacionPersonalCargos r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Personal
                        join l in context.Cargo
                        on e.IdCargo equals l.Id
                        where (e.Nombre.Contains(r.Busqueda) || e.Apellidos.Contains(r.Busqueda) || e.Edad.ToString().Contains(r.Busqueda) || e.Direccion.Contains(r.Busqueda) || l.Nombre.Contains(r.Busqueda)) && e.IdCentro.Equals(r.Id)

                        select new RelacionPersonalCargos
                        {

                            Id = e.Id,
                            Nombre = e.Nombre,
                            Apellidos = e.Apellidos,
                            Edad = e.Edad,
                            Direccion = e.Direccion,
                            IdCargo = e.IdCargo,
                            Cargo = l.Nombre
                          

                        }).Take(20).ToList();

            return list;

        }


    }

}

    
