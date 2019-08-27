using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SEyGRE.Models
{
    public partial class RelacionResiduosClasificacion
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public float? Peso { get; set; }
        public string Clasificacion { get; set; }
        public DateTime? Fecha { get; set; }

        public string Busqueda { get; set; } /*funcionara ?*/

    }
}