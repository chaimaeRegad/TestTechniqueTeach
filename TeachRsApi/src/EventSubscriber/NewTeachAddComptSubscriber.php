<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

use App\Entity\Teachr;
use App\Entity\Nombredeteach;
use ApiPlatform\Core\EventListener\EventPriorities;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\GetResponseForControllerResultEvent;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

final class NewTeachAddComptSubscriber implements EventSubscriberInterface
{

    public function changeComp(ViewEvent $event)
    {
        $user = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if (!$user instanceof Teachr || Request::METHOD_POST !== $method) {
            return;
        }

      //  ici on devrait faire l'action d'update du compteur dans la base de donnée 
        
    }
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['changeComp',EventPriorities::POST_WRITE]
        ];
    }
}
