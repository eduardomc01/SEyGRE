using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using MySql.Data.MySqlClient;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SEyGRE.Models;

namespace SEyGRE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeguridadController : ControllerBase
    {
        private seygreContext context;
        private readonly string connectionString;
        private readonly IHostingEnvironment env;

        public SeguridadController (seygreContext _context, string _connectionString, IHostingEnvironment _env)
        {
            context = _context;
            connectionString = _connectionString;
            env = _env;

        }

        [HttpGet("[action]")]
        public JsonResult BackupBaseDatos()
        {

            string path = env.WebRootPath + Path.DirectorySeparatorChar + "ClientApp"
                                               + Path.DirectorySeparatorChar + "src"
                                               + Path.DirectorySeparatorChar + "assets"
                                               + Path.DirectorySeparatorChar + "respaldo";

                return new JsonResult(new InfoJson()
                {

                    info = "Eduardo",
                    ruta = path
                });
        }


    }

}

    
public class InfoJson
{
    public string info;
    public string ruta;
}
