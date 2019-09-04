using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SEyGRE.Models
{
    public partial class RelacionPersonalCargos
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public int? Edad { get; set; }
        public string Direccion { get; set; }
        public int? IdCargo { get; set; }
        public string Cargo { get; set; }

        public string Busqueda { get; set; } /*funcionara ?*/

    }
}