using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SEyGRE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class pruebaaaaaaController : ControllerBase
    {
        // GET: api/pruebaaaaaa
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/pruebaaaaaa/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/pruebaaaaaa
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/pruebaaaaaa/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        public IActionResult query ()
        {
            return new JsonResult (new metalesResult ()
            {
                data = new metalesArray ()
                {
                    cobre = new series() { serieA = 10, serieB = 20 },
                    aluminio  = new series() { serieA =  20, serieB = 20 }
                }
            });
        }
    }
}

class metalesResult
{
    public metalesArray data;
}

class metalesArray
{
    public series cobre;
    public series aluminio;
}

class series
{
    public int serieA;
    public int serieB;
}