using ExamModels.Database;
using ExamModels.Models;
using ExamRepo.Interfaces;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExamRepo.Services
{
    public class ExamServices:IExanInterface
    {
        KrunalDhote351Entity _Db = new KrunalDhote351Entity();

        public ExamMVC Login(LoginModel data)
        {
            var result = _Db.ExamMVC.Where(x => x.Email == data.email && x.Password == data.password).FirstOrDefault();
            if (result != null)
            {
                return result;
            }
            return null;
        } 

        public int Register(ExamModel data)
        {
            
            var result = ExamHelper.Helpers.ExamHelper.Register(data);
            if (result != null)
            {
                _Db.ExamMVC.Add(result);
                _Db.SaveChanges();
                return result.Id;
            }
            return 0;
        }

        public void Update(ExamModel data)
        {
            var da = _Db.ExamMVC.Where(x => x.Id == data.Id).FirstOrDefault();
            da.FirstName = data.FirstName;
            da.LastName = data.LastName;
            da.DateOfBirth = data.DateOfBirth;
            da.Address = data.Address;
            da.Password = data.Password;
            da.Hobbies = data.Hobbies;
            da.ProfilePhoto = data.ProfilePhoto;
            da.Email = data.Email;
            da.Gender = data.Gender;
            _Db.SaveChanges();
        }

        public IEnumerable  GetCountry()
        {
            _Db.Configuration.ProxyCreationEnabled = false;
            var result = _Db.Country.ToList();
            return result;
        }

        public IEnumerable GetState(int id)
        {
            _Db.Configuration.ProxyCreationEnabled = false;
            var result = _Db.State.Where(x => x.CountryId == id).ToList();
            return result;
        }
        public IEnumerable GetCity(int id)
        {
            _Db.Configuration.ProxyCreationEnabled = false;
            var result = _Db.City.Where(x => x.StateId == id).ToList();
            return result;
        }


        public ExamModel GetUserById(int id)
        {
            var data= _Db.ExamMVC.Where(x => x.Id == id).FirstOrDefault();
            var result= ExamHelper.Helpers.ExamHelper.GetUser(data);
            return result;
        }
    }
}
