using System;
using System.Collections.Generic;

namespace SEyGRE.Models
{
    public partial class Clasificacion
    {
        public Clasificacion()
        {
            Residuos = new HashSet<Residuos>();
        }

        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descripccion { get; set; }

        public ICollection<Residuos> Residuos { get; set; }
    }
}
