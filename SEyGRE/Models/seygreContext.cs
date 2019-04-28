using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SEyGRE.Models
{
    public partial class seygreContext : DbContext
    {
        public seygreContext()
        {
        }

        public seygreContext(DbContextOptions<seygreContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Centrosacopio> Centrosacopio { get; set; }
        public virtual DbSet<Clasificacion> Clasificacion { get; set; }
        public virtual DbSet<Estatus> Estatus { get; set; }
        public virtual DbSet<Personal> Personal { get; set; }
        public virtual DbSet<Residuos> Residuos { get; set; }
        public virtual DbSet<Residuoselementos> Residuoselementos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("Server=localhost;Database=seygre;User=root;Password=123456;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Centrosacopio>(entity =>
            {
                entity.ToTable("centrosacopio");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Latitud).HasColumnName("latitud");

                entity.Property(e => e.Longitud).HasColumnName("longitud");

                entity.Property(e => e.Nombre)
                    .HasColumnName("nombre")
                    .HasColumnType("varchar(45)");
            });

            modelBuilder.Entity<Clasificacion>(entity =>
            {
                entity.ToTable("clasificacion");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Descripccion)
                    .HasColumnName("descripccion")
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Titulo)
                    .HasColumnName("titulo")
                    .HasColumnType("varchar(45)");
            });

            modelBuilder.Entity<Estatus>(entity =>
            {
                entity.ToTable("estatus");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Descripccion)
                    .HasColumnName("descripccion")
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Titulo)
                    .HasColumnName("titulo")
                    .HasColumnType("varchar(45)");
            });

            modelBuilder.Entity<Personal>(entity =>
            {
                entity.ToTable("personal");

                entity.HasIndex(e => e.IdCentro)
                    .HasName("fk_idCentro_id_idx");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Apellidos)
                    .HasColumnName("apellidos")
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Direccion)
                    .HasColumnName("direccion")
                    .HasColumnType("varchar(90)");

                entity.Property(e => e.Edad)
                    .HasColumnName("edad")
                    .HasColumnType("int(11)");

                entity.Property(e => e.IdCargo)
                    .HasColumnName("idCargo")
                    .HasColumnType("int(11)");

                entity.Property(e => e.IdCentro)
                    .HasColumnName("idCentro")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Nombre)
                    .HasColumnName("nombre")
                    .HasColumnType("varchar(45)");
            });

            modelBuilder.Entity<Residuos>(entity =>
            {
                entity.ToTable("residuos");

                entity.HasIndex(e => e.IdClasificacion)
                    .HasName("fk_idClasificacion_id_idx");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Fecha)
                    .HasColumnName("fecha")
                    .HasColumnType("date");

                entity.Property(e => e.IdClasificacion)
                    .HasColumnName("idClasificacion")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Nombre)
                    .HasColumnName("nombre")
                    .HasColumnType("varchar(45)");

                entity.Property(e => e.Peso).HasColumnName("peso");
            });

            modelBuilder.Entity<Residuoselementos>(entity =>
            {
                entity.ToTable("residuoselementos");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Descripccion)
                    .HasColumnName("descripccion")
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Nombre)
                    .HasColumnName("nombre")
                    .HasColumnType("varchar(45)");

                entity.Property(e => e.Porcentaje).HasColumnName("porcentaje");
            });
        }
    }
}
