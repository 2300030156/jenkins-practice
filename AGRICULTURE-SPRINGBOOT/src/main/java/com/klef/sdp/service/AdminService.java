package com.klef.sdp.service;

import java.util.List;

import com.klef.sdp.model.Admin;
import com.klef.sdp.model.Farmer;

public interface AdminService 
{
  public Admin checkadminlogin(String username,String password);
  
  public String addFarmer(Farmer farmer);
  public List<Farmer> displayFarmer();
  public String deleteFarmer(int mid);
  
//  public List<Customer> displaycustomers();
//  public String deletecustomer(int cid);
  
//  public long displaycustomercount();
  public long displayFarmercount();
  
}