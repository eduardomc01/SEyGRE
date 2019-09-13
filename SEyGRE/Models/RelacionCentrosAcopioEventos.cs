using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SEyGRE.Models
{
    public partial class RelacionCentrosAcopioEventos
    {

        public int Id { get; set; }
        public string Nombre { get; set; }

        public int idEvento { get; set; }
        public string NombreEvento { get; set; }

    }
}



/* clase 1 creada que me permite especificar lo que requiero de una consulta o insercion en
 * el controller 
  */


