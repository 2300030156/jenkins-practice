package com.klef.sdp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import ch.qos.logback.core.net.SyslogOutputStream;

@SpringBootApplication
public class AgricultureSpringbootApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(AgricultureSpringbootApplication.class, args);
		System.out.println("HI");
	}

}
