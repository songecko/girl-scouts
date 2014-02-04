<?php

require_once __DIR__.'/vendor/autoload.php';

$app = new Silex\Application();

// app config
$app['debug'] = true;
$app->register(new Silex\Provider\TwigServiceProvider(), array(
	'twig.path' => __DIR__.'/views',
));
$app->register(new Silex\Provider\UrlGeneratorServiceProvider());

// controllers
$app->get("/", function () use ($app) 
{
	 return $app['twig']->render('index.html.twig');
})->bind('homepage');

// Programa
$app->get("/programa", function () use ($app)
{
	return $app['twig']->render('programa.html.twig');
})->bind('programa');

$app->get("/programa-section", function () use ($app)
{
	return $app['twig']->render('programa_section.html.twig');
})->bind('programa-section');

//Quienes somos
$app->get("/quienes-somos", function () use ($app)
{
	return $app['twig']->render('quienes_somos.html.twig');
})->bind('quienes_somos');

$app->get("/quienes-somos-section", function () use ($app)
{
	return $app['twig']->render('quienes_somos_section.html.twig');
})->bind('quienes_somos-section');


//Voluntarios
$app->get("/voluntarios", function () use ($app)
{
	return $app['twig']->render('voluntarios.html.twig');
})->bind('voluntarios');

$app->get("/voluntarios-section", function () use ($app)
{
	return $app['twig']->render('voluntarios_section.html.twig');
})->bind('voluntarios-section');

//Noticias
$app->get("/noticias", function () use ($app)
{
	return $app['twig']->render('news.html.twig');
})->bind('news');

$app->get("/noticias-section", function () use ($app)
{
	return $app['twig']->render('news_section.html.twig');
})->bind('news-section');

//Contacto
$app->get("/contacto", function () use ($app)
{
	return $app['twig']->render('contact.html.twig');
})->bind('contact');

$app->get("/contacto-section", function () use ($app)
{
	return $app['twig']->render('contact_section.html.twig');
})->bind('contact-section');


$app->run();