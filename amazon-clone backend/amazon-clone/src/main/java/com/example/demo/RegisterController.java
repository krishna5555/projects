package com.example.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

	@Autowired
	UserModel userModel;
	
	@PostMapping("/register")
	@ResponseBody
	public String register(@RequestParam("userName") final String userName,
						 @RequestParam("mobileNo") final String mobileNo,
						 @RequestParam("email") final String email,
						 @RequestParam("password") final String password) {
		
		userModel.setUserName(userName);
		userModel.setMobileNo(mobileNo);
		userModel.setEmail(email);
		userModel.setPassword(password);
		
		System.out.println(userModel);

		Configuration configuration = new Configuration()
										  .configure("hibernate.cfg.xml")
										  .addAnnotatedClass(UserModel.class);
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		Transaction transaction = session.beginTransaction();
		session.save(userModel);
		transaction.commit();
		
		return "registered";
	}
}
