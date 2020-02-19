<?php

namespace App\Repository;

use App\Entity\Nombredeteach;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Nombredeteach|null find($id, $lockMode = null, $lockVersion = null)
 * @method Nombredeteach|null findOneBy(array $criteria, array $orderBy = null)
 * @method Nombredeteach[]    findAll()
 * @method Nombredeteach[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NombredeteachRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Nombredeteach::class);
    }

    // /**
    //  * @return Nombredeteach[] Returns an array of Nombredeteach objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('n.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Nombredeteach
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
