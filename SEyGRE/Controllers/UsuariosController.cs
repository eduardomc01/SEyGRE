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
    public class UsuariosController : ControllerBase
    {

        private seygreContext context;

        public UsuariosController()
        {
            context = new seygreContext();
        }


        [HttpPost("[action]")]
        public void InsertarUsuarios([FromBody] Usuarios r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            context.Usuarios.Add(r);

            context.SaveChanges();

        }




    }
}
