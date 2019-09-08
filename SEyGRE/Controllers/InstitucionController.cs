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
    public class InstitucionController : ControllerBase
    {

        private seygreContext context;

        public InstitucionController (seygreContext _context)
        {
            context = _context;

        }


        [HttpPost("[action]")]
        public void AgregarNoticia([FromBody] Noticias r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            context.Noticias.Add(r);

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


    }

}

    
