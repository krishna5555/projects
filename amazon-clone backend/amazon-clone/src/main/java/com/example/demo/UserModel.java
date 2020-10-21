package com.example.demo;

import org.springframework.stereotype.Component;

@Component
public class UserModel {

	private String userName;
	private String mobileNo;
	private String email;
	private String password;
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "UserModel [userName=" + userName + ", mobileNo=" + mobileNo + ", email=" + email + ", password="
				+ password + "]";
	}
}
