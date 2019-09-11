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


        [HttpGet("[action]")]
        public List<Noticias> ObtenerNoticias()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Noticias select e).ToList();

            return list;

        }



        [HttpPost("[action]")]
        public void ModificarNoticia([FromBody] Noticias r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Noticias.Find(r.Id);

            if(r.Nombre != null)
            {
                found.Nombre = r.Nombre;
            }
            if(r.ImagenUrl != null)
            {
                found.ImagenUrl = r.ImagenUrl;
            }
            if (r.Descripccion != null)
            {

                found.Descripccion = r.Descripccion;
            }
            if (r.NoticiaUrl != null)
            {

                found.NoticiaUrl = r.NoticiaUrl;
            }

            context.Update(found);

            context.SaveChanges();

        }


        [HttpPost("[action]")]
        public void EliminarNoticia([FromBody] int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Noticias.Find(id);

            context.Noticias.Remove(found);

            context.SaveChanges();

        }


    }

}

    
