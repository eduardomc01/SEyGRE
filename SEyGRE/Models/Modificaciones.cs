using System;
using System.Collections.Generic;

namespace SEyGRE.Models
{
    public partial class Modificaciones
    {
        public int Id { get; set; }
        public string Usuario { get; set; }
        public DateTime? Fecha { get; set; }
        public string Actividad { get; set; }
        public int? IdPersonal { get; set; }
    }
}
