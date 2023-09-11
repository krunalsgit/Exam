using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExamModels.Models
{
    public class StateModel
    {
        public int id { get; set; }
        public string StateName { get; set; }
        public Nullable<int> CountryId { get; set; }
        public virtual CountryModel Country { get; set; }
    }
}
