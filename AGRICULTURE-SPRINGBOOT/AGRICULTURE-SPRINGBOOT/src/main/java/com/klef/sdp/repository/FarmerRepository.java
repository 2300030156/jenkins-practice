package com.klef.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.klef.sdp.model.Farmer;

public interface FarmerRepository extends JpaRepository<Farmer,Integer> {
	 public Farmer findByUsernameAndPassword(String username, String password);
	 @Query("SELECT COUNT(f) FROM Farmer f")
	    long farmercount();
}
