<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Modules\Menu\Database\Seeders\MenuTableSeeder;
use Modules\Pages\Database\Seeders\PagesTableSeeder;

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
            MenuTableSeeder::class
        ]);
    }
}
