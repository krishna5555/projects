package com.example.demo;

import java.util.Iterator;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

	@PostMapping("/login")
	public String login(@RequestParam("email") final String email, @RequestParam("password") final String password) {
		
		Configuration configuration = new Configuration()
									  .configure("hibernate.cfg.xml")
									  .addAnnotatedClass(UserModel.class);
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Query query = session.createQuery("from users where email='"+email+"' and password='"+password+"'");
		Iterator iterator = query.iterate();
		while(iterator.hasNext()) {
			//record is present
			return "Login successfull";
		}
		return "Login failed. Please create an account";
	}
}
