package com.klef.sdp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ch.qos.logback.core.net.SyslogOutputStream;

@SpringBootApplication
public class AgricultureSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgricultureSpringbootApplication.class, args);
		System.out.println("HI");
	}

}
