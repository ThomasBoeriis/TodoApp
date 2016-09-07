using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace OpgaveApi.Models
{
    public class TaskModel : DbContext
    {
        public TaskModel()
        {
            this.Configuration.LazyLoadingEnabled = true;
            this.Configuration.ProxyCreationEnabled = false;
        }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Task> Tasks { get; set; }
    }
}