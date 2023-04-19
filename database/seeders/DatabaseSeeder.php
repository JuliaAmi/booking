<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
//use Modules\Menu\Database\Seeders\MenuTableSeeder;
use Modules\Pages\Database\Seeders\PagesTableSeeder;
use Modules\Roles\Database\Seeders\RolesTableSeeder;
use Modules\Users\Database\Seeders\UsersTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            PagesTableSeeder::class,
            UsersTableSeeder::class,
            RolesTableSeeder::class,
            //MenuTableSeeder::class,
        ]);
    }
}
