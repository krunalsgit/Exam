using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace ExamModels.Models
{
    public class ExamModel
    {
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public Nullable<System.DateTime> DateOfBirth { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public Nullable<int> CountryId { get; set; }
        public Nullable<int> StateId { get; set; }
        public Nullable<int> CityId { get; set; }
        public string ProfilePhoto { get; set; }
        public string Documents { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public string Hobbies { get; set; }
        public virtual CityModel City { get; set; }
        public virtual CountryModel Country { get; set; }
        public virtual StateModel State { get; set; }
        public HttpPostedFileBase propic { get; set; }
    }
}
