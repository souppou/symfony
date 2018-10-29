<?php

namespace App\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ArticleController {
	
	/**
	* @Route("/")
	*/
	public function homepage(){
		
		return new Response("My new page");
	}
	
	/**
	* @Route("/news/{animals}")
	*/
	
	public function show($animals){
		return new Response(sprintf("New slug is %s",$animals));
	}
	
}