using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SEyGRE.Models;
using MySql.Data.MySqlClient;

namespace SEyGRE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeguridadController : ControllerBase
    {

        private readonly IHostingEnvironment env;

        public SeguridadController (IHostingEnvironment _env)
        {
            env = _env;

        }

        [HttpGet("[action]")]
        public int BackupBaseDatos()
        {


            using (MySqlDatabase conn = new MySqlDatabase())
            {



                    using (MySqlBackup bac = new MySqlBackup())
                    {

                        bac.ExportToFile("PRUEBA-CHIDA.sql");
                    }

              


            }
            


            /*
            using (MySqlConnection conn = new MySqlConnection(connectionString))
            {

                using (MySqlCommand cmd = new MySqlCommand())
                {


                    using (MySqlBackup bac = new MySqlBackup(cmd)) {

                        bac.ExportToFile("C:\\Users\\eduar\\Desktop\\PRUEBA-CHIDA.sql");
                    }
                    
                }
                

            }*/

            return 1;

        }

    }

}


/*
            string path = env.WebRootPath + Path.DirectorySeparatorChar + "ClientApp"
                                               + Path.DirectorySeparatorChar + "src"
                                               + Path.DirectorySeparatorChar + "assets"
                                               + Path.DirectorySeparatorChar + "respaldo";

                return new JsonResult(new InfoJson()
                {

                    info = "Eduardo",
                    ruta = path
                });

    */



public class InfoJson
{
    public string info;
    public string ruta;
}
