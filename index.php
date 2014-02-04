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

$app->get("/programa", function () use ($app)
{
	return $app['twig']->render('programa.html.twig');
})->bind('programa');

$app->get("/quienes-somos", function () use ($app)
{
	return $app['twig']->render('quienes_somos.html.twig');
})->bind('quienes_somos');

$app->get("/voluntarios", function () use ($app)
{
	return $app['twig']->render('voluntarios.html.twig');
})->bind('voluntarios');

$app->get("/noticias", function () use ($app)
{
	return $app['twig']->render('news.html.twig');
})->bind('news');

$app->get("/contact", function () use ($app)
{
	return $app['twig']->render('contact.html.twig');
})->bind('contact');

$app->run();