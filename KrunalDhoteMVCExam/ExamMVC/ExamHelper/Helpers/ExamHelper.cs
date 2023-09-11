using ExamModels.Database;
using ExamModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExamHelper.Helpers { 
    public class ExamHelper
    { 
        public static ExamMVC Register(ExamModel data)
        {
            ExamMVC result = new ExamMVC
            {
                FirstName = data.FirstName,
                LastName = data.LastName,
                Email = data.Email,
                Password = data.Password,
                DateOfBirth = data.DateOfBirth,
                Address = data.Address,
                Country = data.CountryId,
                State = data.StateId,
                City = data.CityId,
                ProfilePhoto =data.ProfilePhoto,
                Documents =data.Documents,
                Gender =data.Gender,
                Hobbies =data.Hobbies
            };
            return result;
        }
        public static ExamModel GetUser(ExamMVC data)
        {
            ExamModel result = new ExamModel
            {
                FirstName =data.FirstName,
                LastName =data.LastName,
                Email =data.Email,
                Password =data.Password,
                DateOfBirth =data.DateOfBirth,
                Address =data.Address,
                CountryId =data.Country,
                StateId =data.State,
                CityId =data.City,
                ProfilePhoto =data.ProfilePhoto,
                Documents =data.Documents,
                Gender =data.Gender,
                Hobbies =data.Hobbies
            };
            return result;
        }
    }
}
