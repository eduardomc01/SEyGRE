using System;
using System.Collections.Generic;

namespace SEyGRE.Models
{
    public partial class Eventos
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Organizador { get; set; }
        public TimeSpan? Horario { get; set; }
        public DateTime? Fecha { get; set; }
        public int? IdEstatus { get; set; }
    }
}
