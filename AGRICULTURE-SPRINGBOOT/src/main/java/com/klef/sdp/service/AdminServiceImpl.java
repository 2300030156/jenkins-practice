package com.klef.sdp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.sdp.model.Admin;
import com.klef.sdp.model.Farmer;
import com.klef.sdp.repository.AdminRepository;
import com.klef.sdp.repository.FarmerRepository;

@Service
public class AdminServiceImpl implements AdminService
{
	@Autowired
    private AdminRepository adminRepository;
	
	@Autowired
    private FarmerRepository Fr;
	
//	@Autowired
//	private CustomerRepository customerRepository;
	@Override
	public Admin checkadminlogin(String username, String password) {
		return adminRepository.findByUsernameAndPassword(username, password);
	}

	@Override
	public String addFarmer(Farmer farmer) {
		Fr.save(farmer);
		return "Farmer Added Successfully";
	}

	@Override
	public List<Farmer> displayFarmer() {
		return Fr.findAll();
	}

	@Override
	public String deleteFarmer(int mid) {
		 Optional<Farmer> f = Fr.findById(mid);
		    
		    if (f.isPresent()) 
		    {	
		        Fr.deleteById(mid);
		        return "Farmer Deleted Successfully";
		    } 
		    else 
		    {
		        return "Farmer ID Not Found";
		    }
	}

	@Override
	public long displayFarmercount() {
		return Fr.count();
	}
//	@Override
//	public long displaycustomercount() 
//	{
//		return customerRepository.count();
//	}
//	@Override
//	public String deletecustomer(int cid) 
//	{
//	    Optional<Customer> customer = customerRepository.findById(cid);
//	    
//	    if (customer.isPresent()) 
//	    {	
//	        customerRepository.deleteById(cid);
//	        return "Customer Deleted Successfully";
//	    } 
//	    else 
//	    {
//	        return "Customer ID Not Found";
//	    }
//	}
//	@Override
//	public List<Customer> displaycustomers() 
//	{
//		return customerRepository.findAll();
//	}

	
}