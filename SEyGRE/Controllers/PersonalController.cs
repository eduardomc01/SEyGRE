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

        public PersonalController ()
        {
            context = new seygreContext();

        }


        [HttpGet("[action]")]
        public List<Personal> GetPersonal()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Personal select e).ToList();

            return list;
           
        }


    }

}

    
