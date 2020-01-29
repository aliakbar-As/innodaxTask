
export const BaseURL = 'http://king.mostafavakili.ir/';
// export const BaseURL = 'http://aryanfitclub.mostafavakili.ir/';


export const UpdateProfile = BaseURL + 'ArianFit/Api/Users/UpdateProfile'; //post

export const Getprofile = BaseURL + 'ArianFit/Api/Users/Getprofile';   //get

export const GetMessages = BaseURL + 'ArianFit/Api/Users/GetMessages';   //get

export const GetReport = BaseURL + 'ArianFit/Api/Users/GetReport';   //get

export const MobileSignUp = BaseURL + 'ArianFit/Api/Users/MobileSignUp';   //post

export const MobileActivate = BaseURL + 'ArianFit/Api/Users/MobileActivate';   //get

export const ResendActivationCode = BaseURL + 'ArianFit/Api/Users/ResendActivationCode?mobile=';   //get

export const GetCities = BaseURL + 'ArianFit/Api/Users/GetCities';   //get

export const GetAppinfo = BaseURL + 'ArianFit/Api/Users/GetAppinfo';   //get

export const GetMyMethods = BaseURL + 'ArianFit/Api/Methods/GetMyMethods';   //get

export const GetMethodsList = BaseURL + 'ArianFit/Api/Methods/GetMethodsList';   //get

export const NewReport = BaseURL + 'ArianFit/Api/Methods/NewReport';   //post

export const GetBlogs = BaseURL + 'ArianFit/Api/Blogs/GetBlogs';   //get

export const GetBlogDetail = BaseURL + 'ArianFit/Api/Blogs/GetBlogDetail?Id=1';   //get


const ApiHelper = {
   UpdateProfile,
   Getprofile,
   GetMessages,
   GetReport,
   MobileSignUp,
   MobileActivate,
   ResendActivationCode,
   GetCities,
   GetAppinfo,
   GetMyMethods,
   GetMethodsList,
   NewReport,
   GetBlogs,
   GetBlogDetail,
};

export { ApiHelper }
