using ExamModels.Database;
using ExamModels.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExamRepo.Interfaces
{
    public interface IExanInterface
    {
        ExamMVC Login(LoginModel data);
        IEnumerable GetState(int id);
        IEnumerable GetCity(int id);
        IEnumerable GetCountry();
        int Register(ExamModel data);
        ExamModel GetUserById(int id);

        void Update(ExamModel data);
    }
}
