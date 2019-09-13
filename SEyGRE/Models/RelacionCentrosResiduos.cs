using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SEyGRE.Models
{
    public partial class RelacionCentrosResiduos
    {
        public int Id { get; set; }
        public string NombreCentro { get; set; }
        public string NombreResiudo { get; set; }
        public float? Peso { get; set; }

        public string Fecha { get; set; }

        public string NombreEvento { get; set; }/* tal vez no se utilice */

        public string Etapa { get; set; }
        public int? IdEtapa { get; set; }

        public string Busqueda { get; set; } /*funcionara ?*/

    }
}