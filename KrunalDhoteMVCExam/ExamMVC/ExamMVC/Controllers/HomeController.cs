using ExamModels.Models;
using ExamMVC.SessionHelper;
using ExamMVC.ActionFilter;
using ExamRepo.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;

namespace ExamMVC.Controllers
{
    public class HomeController : Controller
    {
        IExanInterface _Iexam;
        public HomeController(IExanInterface ExamInterface)
        {
            _Iexam = ExamInterface;
        }
       
        [MyActionFilter]
        public ActionResult Index(int id=0)
        {
            if (id == 0)
            {
                return RedirectToAction("Login");
            }
            var result = _Iexam.GetUserById(id);
          
            if (result != null)
            {
                ViewBag.Country = _Iexam.GetCountry();
                ViewBag.State = _Iexam.GetState((int)result.CountryId);
                ViewBag.City = _Iexam.GetCity((int)result.StateId);
                return View(result);
            }
            return RedirectToAction("Login");
        }

        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(LoginModel data)
        {
            var result = _Iexam.Login(data);
            if (result!=null)
            {
                var name = result.FirstName + " " + result.LastName;
                SessionLogin.Name = name;
                return RedirectToAction("Index",new { id = result.Id });
            }
            ViewBag.Messege = "Invalid Id Password Entered!";
            return View();
        }

        public ActionResult Register()
        {
            ViewBag.Country= _Iexam.GetCountry();
            ViewBag.State = new SelectList("");
            ViewBag.City = new SelectList("");
            return View();
        }

        [HttpPost]
        public ActionResult Register(ExamModel data)
        {
            if (ModelState.IsValid)
            {
                
                string _FileName = Path.GetFileName(data.propic.FileName);
                data.ProfilePhoto = "Content/Documents/" + _FileName;
                data.propic.SaveAs(Path.Combine(Server.MapPath("~/Content/Documents/"), _FileName));

                //var doc = "Content/Documents/" + data.Documents;
                //data.Documents = doc;
                //var pic = "Content/Documents/" + data.ProfilePhoto;
                //data.ProfilePhoto = pic;

                //this.getPic(data.ProfilePhoto);

                if (data.Id != 0)
                {
                    _Iexam.Update(data);
                    return RedirectToAction("Index",new { id=data.Id});
                }
                else
                {
                    var result = _Iexam.Register(data);
                    if (result != 0)
                    {
                        return RedirectToAction("Login");
                    }
                } 
            }
            ViewBag.Country = _Iexam.GetCountry();
            return View();
        }


        public JsonResult GetState(int id)
        {
            var result = _Iexam.GetState(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetCity(int id)
        {
            var result = _Iexam.GetCity(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }


        public ActionResult Logout()
        {
            Session.Clear();
            return RedirectToAction("Login");
        }

    //    [HttpPost]
        public void getPic(HttpPostedFileBase file)
        {
            //using System.IO;
            //using static System.Net.WebRequestMethods;

            string path = Path.Combine(Server.MapPath("~/Content/Documents"), Path.GetFileName(file.FileName));
            file.SaveAs(path);
        }
    }
}