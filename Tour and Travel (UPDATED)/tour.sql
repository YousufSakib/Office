-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 23, 2024 at 03:29 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tour`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `companyEmail` varchar(255) NOT NULL,
  `companyPhoneNo` varchar(255) NOT NULL,
  `receptionOffice` varchar(255) NOT NULL,
  `receptionHours` varchar(255) NOT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `facebookLink` varchar(255) DEFAULT NULL,
  `instagramLink` varchar(255) DEFAULT NULL,
  `tweeterLink` varchar(255) DEFAULT NULL,
  `aboutUs` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `companyName`, `companyEmail`, `companyPhoneNo`, `receptionOffice`, `receptionHours`, `latitude`, `longitude`, `facebookLink`, `instagramLink`, `tweeterLink`, `aboutUs`) VALUES
(1, 'IGL TOUR', 'igltour@igl.com', '01958-66699', 'House # 33A(4th Floor), Road # 4, Dhanmondi, Dhaka-1205, Bangladesh', '9:00 AM - 6:00 PM', '23.740824', '90.378509', 'https://www.facebook.com/IGLWebLtd/', '#', 'https://x.com/iglwebltd', 'IGL Web Ltd is Software company since 2007 in Bangladesh location but services provide any country in the World about software, website development, web hosting, domain registration. but others services like server and network environment installation only in Bangladesh based service and support. IGL Web Ltd is a sister concern of IGL Group');

-- --------------------------------------------------------

--
-- Table structure for table `Contacts`
--

CREATE TABLE `Contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phoneNo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `tourDuration` int(11) NOT NULL,
  `travellerNo` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `destination` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Contacts`
--

INSERT INTO `Contacts` (`id`, `name`, `phoneNo`, `email`, `tourDuration`, `travellerNo`, `date`, `destination`, `message`, `createdAt`, `updatedAt`) VALUES
(1, 'Yousuf Ali Shakib', '01782884480', 'yousufsakib29603@gmail.com', 5, 6, '2024-10-18 00:00:00', 'Chittagong Hill Tracts', '\"IGL Web Ltd is Software company since 2007 in Bangladesh location but services provide any country in the World about software, website development, web hosting, domain registration. but others services like server and network environment installation only in Bangladesh based service and support. IGL Web Ltd is a sister concern of IGL Group.\"', '2024-10-14 18:54:33', '2024-10-14 18:54:33'),
(2, 'ইউসুফ সাকিব', '01782884480', 'sakib@gmail.com', 4, 6, '2024-10-26 00:00:00', 'Bandarban', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan', '2024-10-22 17:24:52', '2024-10-22 17:24:52'),
(3, 'Rakibul Hasal', '0135345353', 'reslass53@gmail.com', 7, 7, '2024-11-08 00:00:00', 'Sundarbans', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan', '2024-10-22 17:27:24', '2024-10-22 17:27:24');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `packageHeroImg` varchar(255) DEFAULT NULL,
  `aboutHeroImg` varchar(255) DEFAULT NULL,
  `homeHeroImg` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `placesToVistHeroImg` varchar(255) DEFAULT NULL,
  `meetBangladeshHeroImg` varchar(255) DEFAULT NULL,
  `contactUsHeroImg` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `packageHeroImg`, `aboutHeroImg`, `homeHeroImg`, `logo`, `placesToVistHeroImg`, `meetBangladeshHeroImg`, `contactUsHeroImg`) VALUES
(8, 'packageHeroImg-1728928978456-254414542.jpg', 'aboutHeroImg-1728928978480-275350677.jpg', 'homeHeroImg-1728928978481-308751259.jpg', 'logo-1728928978485-4506592.png', 'placesToVistHeroImg-1728928978485-502684809.jpg', 'meetBangladeshHeroImg-1728928978485-777027044.jpg', 'contactUsHeroImg-1728931475089-604804161.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `Packages`
--

CREATE TABLE `Packages` (
  `id` int(11) NOT NULL,
  `createdBy` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `duration` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `profileImg` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `tourHighLights` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tourHighLights`)),
  `pricePerPerson` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`pricePerPerson`)),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `attractions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`attractions`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Packages`
--

INSERT INTO `Packages` (`id`, `createdBy`, `destination`, `duration`, `category`, `name`, `profileImg`, `description`, `images`, `tourHighLights`, `pricePerPerson`, `createdAt`, `updatedAt`, `attractions`) VALUES
(33, 'Yousuf Shakib (admin)', 'Sundarbans Mangrove Adventure', 3, 'Adventure, Wildlife', 'Sundarbans Mangrove Adventure', '1729615675812-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg', ' Explore the UNESCO World Heritage site of Sundarbans, home to the Royal Bengal Tiger and diverse wildlife. Experience boat safaris, nature walks, and immerse yourself in the beauty of the mangroves.', '[{\"src\":\"1729615676046-logo.png\",\"key\":\"4686b45f8c87\"},{\"src\":\"1729615676046-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"d00972ba841eb\"}]', '\"[{\\\"highlight\\\":\\\"Guided boat tour through the Sundarbans.\\\",\\\"key\\\":\\\"7F4lf2PIrJ\\\"},{\\\"highlight\\\":\\\"Wildlife safari with chances to spot tigers, crocodiles, and rare birds.\\\",\\\"key\\\":\\\"XebS6yK0W7\\\"},{\\\"highlight\\\":\\\"Visit local villages and experience traditional honey harvesting.\\\",\\\"key\\\":\\\"zuwzOwgmCE\\\"},{\\\"highlight\\\":\\\"Camping under the stars.\\\",\\\"key\\\":\\\"4tvPc5mdtd\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting Price\\\",\\\"priceTaka\\\":15000,\\\"key\\\":\\\"DARtIHerfR\\\"}]\"', '2024-10-22 16:47:56', '2024-10-22 16:47:56', '\"[{\\\"attraction\\\":\\\"Sundarbans Mangrove Forest\\\",\\\"key\\\":\\\"P6VIfH24iv\\\"},{\\\"attraction\\\":\\\"Royal Bengal Tiger\\\",\\\"key\\\":\\\"loYqjcXauI\\\"},{\\\"attraction\\\":\\\"Wildlife Safari\\\",\\\"key\\\":\\\"eBDs9sIsp1\\\"}]\"'),
(34, 'Yousuf Shakib (admin)', 'Cox’s Bazar', 4, 'Beach, Leisure', 'Cox’s Bazar Beach Getaway', '1729615839844-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg', 'A luxury beach vacation on the world’s longest natural sea beach. Relax, swim, and explore the serene beauty of Cox’s Bazar, with day trips to nearby islands and national parks.', '[{\"src\":\"1729615839884-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"c2358aa9740e7\"},{\"src\":\"1729615839898-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"b4a8874d28ece\"}]', '\"[{\\\"highlight\\\":\\\"Stay at a luxury beachfront resort.\\\",\\\"key\\\":\\\"uiiAHvShP9\\\"},{\\\"highlight\\\":\\\"Relax on Cox’s Bazar Beach.\\\",\\\"key\\\":\\\"BRUJsllL8k\\\"},{\\\"highlight\\\":\\\"Visit Saint Martin’s Island and enjoy snorkeling.\\\",\\\"key\\\":\\\"UdCaEeSjnT\\\"},{\\\"highlight\\\":\\\"Explore Himchari National Park and Inani Beach.\\\",\\\"key\\\":\\\"LYsgmlYbCB\\\"},{\\\"highlight\\\":\\\"Beach BBQ dinner.\\\",\\\"key\\\":\\\"Yeje15qJR2\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":25000,\\\"key\\\":\\\"UAxQoQvN15\\\"}]\"', '2024-10-22 16:50:39', '2024-10-22 16:50:39', '\"[{\\\"attraction\\\":\\\"Cox\'s Bazar Beach\\\",\\\"key\\\":\\\"wVdYlUPG7p\\\"},{\\\"attraction\\\":\\\"Himchari National Park\\\",\\\"key\\\":\\\"ym5LxN6kWb\\\"},{\\\"attraction\\\":\\\"Saint Martin’s Island\\\",\\\"key\\\":\\\"73RzWkjo0T\\\"}]\"'),
(35, 'Yousuf Shakib (admin)', 'Dhaka', 2, 'Cultural, Historical', 'Historic Dhaka City Exploration', '1729615950523-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg', 'Discover the rich history and cultural heritage of Bangladesh\'s capital, Dhaka. Visit historic sites, explore bustling markets, and enjoy traditional cuisine.', '[{\"src\":\"1729615950556-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"1bc3f6dabd80b\"},{\"src\":\"1729615950581-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"58d567ef7c839\"}]', '\"[{\\\"highlight\\\":\\\"Visit Lalbagh Fort, Ahsan Manzil, and Dhakeshwari Temple.\\\",\\\"key\\\":\\\"ckzV4AVpsp\\\"},{\\\"highlight\\\":\\\"Explore Old Dhaka and its street food culture.\\\",\\\"key\\\":\\\"Rs8RsIYOg4\\\"},{\\\"highlight\\\":\\\"Boat ride on the Buriganga River.\\\",\\\"key\\\":\\\"Xl9MQZEU6i\\\"},{\\\"highlight\\\":\\\"Tour National Museum and Liberation War Museum.\\\",\\\"key\\\":\\\"SRi7wigfys\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting Price\\\",\\\"priceTaka\\\":10000,\\\"key\\\":\\\"VypaMaQX9p\\\"}]\"', '2024-10-22 16:52:30', '2024-10-22 16:52:30', '\"[{\\\"attraction\\\":\\\"Lalbagh Fort\\\",\\\"key\\\":\\\"jOhgZbZGI4\\\"},{\\\"attraction\\\":\\\"Ahsan Manzil\\\",\\\"key\\\":\\\"j7GIIcaGjC\\\"},{\\\"attraction\\\":\\\"Old Dhaka\\\",\\\"key\\\":\\\"zCSuXJN6az\\\"}]\"'),
(36, 'Yousuf Shakib (admin)', 'Sylhet', 3, 'Nature, Relaxation', 'Sylhet Tea Garden Escape', '1729616097574-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg', 'Escape to the tranquil tea estates of Sylhet. Explore lush greenery, peaceful waterways, and local culture, with plenty of opportunities for relaxation and tea tasting.', '[{\"src\":\"1729616097605-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"b75bb7e89a0e8\"},{\"src\":\"1729616097642-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"8e1a2cc329165\"}]', '\"[{\\\"highlight\\\":\\\"Stay in a serene tea estate.\\\",\\\"key\\\":\\\"JJTVhFq0GZ\\\"},{\\\"highlight\\\":\\\"Visit Jaflong for scenic views of the Khasi Hills.\\\",\\\"key\\\":\\\"ZabIk5czpz\\\"},{\\\"highlight\\\":\\\"Explore Ratargul Swamp Forest by boat.\\\",\\\"key\\\":\\\"od5p1R93JS\\\"},{\\\"highlight\\\":\\\"Tea tasting sessions.\\\",\\\"key\\\":\\\"YdkMxakLJO\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting Price\\\",\\\"priceTaka\\\":17500,\\\"key\\\":\\\"Vk6MOb3uO3\\\"}]\"', '2024-10-22 16:54:57', '2024-10-22 16:54:57', '\"[{\\\"attraction\\\":\\\"Sylhet Tea Estates\\\",\\\"key\\\":\\\"r5264jHra7\\\"},{\\\"attraction\\\":\\\"Ratargul Swamp Forest,\\\",\\\"key\\\":\\\"YdFFdBBRuX\\\"},{\\\"attraction\\\":\\\"Jaflong\\\",\\\"key\\\":\\\"mwXcvAaWN2\\\"},{\\\"attraction\\\":\\\"Bholagonj\\\",\\\"key\\\":\\\"9Rddiaq6Sd\\\"}]\"'),
(37, 'Yousuf Shakib (admin)', 'Bandarban', 4, 'Adventure, Nature', 'Bandarban Hill Tracts Adventure', '1729616223762-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg', 'Adventure through the rugged landscapes of Bandarban. Hike through hills, discover hidden waterfalls, and experience the indigenous culture of the hill tribes.', '[{\"src\":\"1729616223785-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"08fea4637e479\"},{\"src\":\"1729616223786-beach.jpg\",\"key\":\"5b96c3bae410d\"}]', '\"[{\\\"highlight\\\":\\\"Trekking through the scenic hills.\\\",\\\"key\\\":\\\"rcmpNmYtM3\\\"},{\\\"highlight\\\":\\\"Visit Nilgiri Hill, Boga Lake, and Nafakhum Waterfall.\\\",\\\"key\\\":\\\"63nMPUnqaN\\\"},{\\\"highlight\\\":\\\"Explore tribal villages and interact with local communities.\\\",\\\"key\\\":\\\"iUbj6k1d75\\\"},{\\\"highlight\\\":\\\"River cruise on the Sangu River.\\\",\\\"key\\\":\\\"OrVc3pH8I8\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Price\\\",\\\"priceTaka\\\":20000,\\\"key\\\":\\\"FHhpMCyOzD\\\"}]\"', '2024-10-22 16:57:03', '2024-10-22 16:57:03', '\"[{\\\"attraction\\\":\\\"Nilgiri Hill\\\",\\\"key\\\":\\\"fwdVkR5ui1\\\"},{\\\"attraction\\\":\\\"Boga Lake\\\",\\\"key\\\":\\\"Uxrjm4knf7\\\"},{\\\"attraction\\\":\\\"Nafakhum Waterfall\\\",\\\"key\\\":\\\"6k6hJ6mqir\\\"}]\"'),
(38, 'Yousuf Shakib (admin)', 'Rangamati', 2, 'Cultural, Nature', 'Rangamati Lake and Tribal Culture Tour', '1729616315129-logo.png', 'Discover the scenic beauty of Rangamati and its vibrant tribal culture. Cruise on Kaptai Lake, visit local villages, and experience the tranquility of the hill tracts.', '[{\"src\":\"1729616315130-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"eec1a37b53da\"},{\"src\":\"1729616315157-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"2c0f3f32b00ac\"}]', '\"[{\\\"highlight\\\":\\\"Boat cruise on Kaptai Lake.\\\",\\\"key\\\":\\\"t7ForB3qTC\\\"},{\\\"highlight\\\":\\\"Visit Chakma tribal village and experience local crafts.\\\",\\\"key\\\":\\\"T5Z9oTzcO2\\\"},{\\\"highlight\\\":\\\"Explore waterfalls and scenic viewpoints.\\\",\\\"key\\\":\\\"8Pwc332XnZ\\\"},{\\\"highlight\\\":\\\"Visit the Hanging Bridge and Buddhist temples.\\\",\\\"key\\\":\\\"U6Y6BkKcUn\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":9000,\\\"key\\\":\\\"Bu3q1aRokt\\\"}]\"', '2024-10-22 16:58:35', '2024-10-22 16:58:35', '\"[{\\\"attraction\\\":\\\"Kaptai Lake\\\",\\\"key\\\":\\\"iht8ny7JFh\\\"},{\\\"attraction\\\":\\\"Chakma Tribe\\\",\\\"key\\\":\\\"ZGhvParU8t\\\"},{\\\"attraction\\\":\\\"Hanging Bridge\\\",\\\"key\\\":\\\"PquTRBwIXu\\\"}]\"'),
(39, 'Yousuf Shakib (admin)', 'Srimangal', 8, 'Nature, Relaxation', 'Srimangal Tea Garden and Rainforest Experience', '1729616420996-31222074-0742-4807-84d7-1912b521e1c7.webp', 'Immerse yourself in the serene beauty of Srimangal, famous for its tea gardens and natural rainforest. Explore diverse wildlife, rolling tea plantations, and peaceful lakes.', '[{\"src\":\"1729616421049-sylhet.jpg\",\"key\":\"216bfbc74a0dc\"},{\"src\":\"1729616421050-sreemangal2.jpg\",\"key\":\"ae346d46a15e1\"},{\"src\":\"1729616421058-sreemangal1.jpg\",\"key\":\"9df1f4255c4a4\"}]', '\"[{\\\"highlight\\\":\\\"Trek through Lawachara National Park to spot rare species like the Hoolock Gibbon.\\\",\\\"key\\\":\\\"lPeoSJ0C69\\\"},{\\\"highlight\\\":\\\"Visit tea gardens and enjoy guided tea tasting.\\\",\\\"key\\\":\\\"JG3ng7hZiL\\\"},{\\\"highlight\\\":\\\"Boat ride on Madhabpur Lake.\\\",\\\"key\\\":\\\"VXvbwb36ot\\\"},{\\\"highlight\\\":\\\"Experience the rich cultural heritage of local ethnic communities.\\\",\\\"key\\\":\\\"ttx1d7iGpc\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":40000,\\\"key\\\":\\\"LWOpFQ5jO9\\\"}]\"', '2024-10-22 17:00:21', '2024-10-22 17:00:21', '\"[{\\\"attraction\\\":\\\"Lawachara National Park\\\",\\\"key\\\":\\\"ESccwDWxFo\\\"},{\\\"attraction\\\":\\\"Srimangal Tea Gardens\\\",\\\"key\\\":\\\"NCRmNOUM6T\\\"},{\\\"attraction\\\":\\\"Madhabpur Lake\\\",\\\"key\\\":\\\"KeECSxe3SG\\\"}]\"'),
(40, 'Yousuf Shakib (admin)', 'Paharpur, Mahasthangarh', 2, 'Historical, Cultural', 'Paharpur and Mahasthangarh Ancient Civilization Tour', '1729616554192-istockphoto-1167235640-1024x1024.jpg', 'Explore the ancient ruins of Paharpur, a UNESCO World Heritage site, and Mahasthangarh, one of the earliest urban archaeological sites in Bangladesh. A journey back to the glorious past of South Asian civilizations.', '[{\"src\":\"1729616554193-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"fe4e9d9b163a7\"},{\"src\":\"1729616554193-31222074-0742-4807-84d7-1912b521e1c7.webp\",\"key\":\"5549246decf86\"}]', '\"[{\\\"highlight\\\":\\\"Visit the ruins of Somapura Mahavihara in Paharpur.\\\",\\\"key\\\":\\\"Wf62HcAc7w\\\"},{\\\"highlight\\\":\\\"Explore Mahasthangarh, an ancient city dating back to the 3rd century BC.\\\",\\\"key\\\":\\\"8xexpkHlta\\\"},{\\\"highlight\\\":\\\"Learn about the rich Buddhist, Hindu, and Muslim heritage of the region.\\\",\\\"key\\\":\\\"w4EYyxFhmZ\\\"},{\\\"highlight\\\":\\\"Visit nearby museums and historical landmarks.\\\",\\\"key\\\":\\\"iVb8IXc4ED\\\"}]\"', '\"[{\\\"priceType\\\":\\\"70000\\\",\\\"priceTaka\\\":0,\\\"key\\\":\\\"ZN8Iugbqw0\\\"}]\"', '2024-10-22 17:02:34', '2024-10-22 17:02:34', '\"[{\\\"attraction\\\":\\\"Paharpur Buddhist Monastery\\\",\\\"key\\\":\\\"QFJBtvbspj\\\"},{\\\"attraction\\\":\\\"Mahasthangarh Ancient City\\\",\\\"key\\\":\\\"EkYsuYgBqg\\\"}]\"'),
(41, 'Yousuf Shakib (admin)', 'Kuakata', 3, 'Beach, Nature', 'Kuakata Beach and Mangrove Forest Retreat', '1729616663925-sreemangal2.jpg', 'Relax at the picturesque Kuakata Beach, where you can view both sunrise and sunset over the ocean. Explore nearby mangrove forests and local fishing villages.', '[{\"src\":\"1729616663935-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"514631f483bb2\"},{\"src\":\"1729616663951-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"5b1ed2be238a6\"}]', '\"[{\\\"highlight\\\":\\\"Beachfront stay with sunrise and sunset views.\\\",\\\"key\\\":\\\"FE9FNSMywo\\\"},{\\\"highlight\\\":\\\"Boat trip to Fatrar Char Mangrove Forest.\\\",\\\"key\\\":\\\"0eJmBjDAP5\\\"},{\\\"highlight\\\":\\\"Visit Lebur Char, a small scenic island off Kuakata.\\\",\\\"key\\\":\\\"N8hVHhci8v\\\"},{\\\"highlight\\\":\\\"Enjoy fresh seafood and local cuisine.\\\",\\\"key\\\":\\\"R08fG8A05S\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting Price\\\",\\\"priceTaka\\\":16000,\\\"key\\\":\\\"30zsfuddCR\\\"}]\"', '2024-10-22 17:04:23', '2024-10-22 17:04:23', '\"[{\\\"attraction\\\":\\\"Kuakata Beach\\\",\\\"key\\\":\\\"cQP91Xqegz\\\"},{\\\"attraction\\\":\\\"Fatrar Char Mangrove Forest\\\",\\\"key\\\":\\\"9JjSCgHoR0\\\"},{\\\"attraction\\\":\\\"Lebur Char\\\",\\\"key\\\":\\\"plA7KyAZRO\\\"}]\"'),
(42, 'Yousuf Shakib (admin)', 'Bagerhat', 2, 'Historical, Cultural', 'Bagerhat Historical and Mosque City Tour', '1729616763900-sreemangal2.jpg', ' Visit the UNESCO-listed Mosque City of Bagerhat, a 15th-century historical marvel with magnificent Islamic architecture and cultural heritage.', '[{\"src\":\"1729616763909-sylhet.jpg\",\"key\":\"4b02f882b43de\"},{\"src\":\"1729616763909-sreemangal1.jpg\",\"key\":\"63cc6ee7a0998\"},{\"src\":\"1729616763913-logo.png\",\"key\":\"85929b5ab8328\"}]', '\"[{\\\"highlight\\\":\\\"Explore the famous Sixty Dome Mosque, a masterpiece of medieval architecture.\\\",\\\"key\\\":\\\"l5KQW37qP3\\\"},{\\\"highlight\\\":\\\"Visit the tomb of Khan Jahan Ali, the founder of Bagerhat.\\\",\\\"key\\\":\\\"Jp0kq31t5Q\\\"},{\\\"highlight\\\":\\\"Learn about the rich Islamic history of the region.\\\",\\\"key\\\":\\\"b0KbwiRTxk\\\"},{\\\"highlight\\\":\\\"Visit other mosques and historical buildings in Bagerhat.\\\",\\\"key\\\":\\\"vZnaHzOK4H\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":5000,\\\"key\\\":\\\"FZfNhgkLRl\\\"}]\"', '2024-10-22 17:06:03', '2024-10-22 17:06:03', '\"[{\\\"attraction\\\":\\\"Sixty Dome Mosque\\\",\\\"key\\\":\\\"c2REdO7s2a\\\"},{\\\"attraction\\\":\\\"Khan Jahan Ali’s Tomb\\\",\\\"key\\\":\\\"3HUCGu2y1c\\\"},{\\\"attraction\\\":\\\"Bagerhat\\\",\\\"key\\\":\\\"rQzwKzya0t\\\"}]\"'),
(43, 'Yousuf Shakib (admin)', 'Dhaka, Bagerhat, Khulna', 7, 'Cultural, Nature, Wildlife', 'Bangladesh Heritage and Nature Expedition', '1729617068982-31222074-0742-4807-84d7-1912b521e1c7.webp', ' Experience the diverse heritage and natural wonders of Bangladesh. Start with the vibrant capital of Dhaka, explore the historic Mosque City of Bagerhat, and finish with a wildlife adventure in the Sundarbans.', '[{\"src\":\"1729617068983-logo.png\",\"key\":\"ae7c2c9045544\"},{\"src\":\"1729617068983-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"9e2dd16b86e6f\"},{\"src\":\"1729617069011-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"e494fba98a3cb\"}]', '\"[{\\\"highlight\\\":\\\"Day 1-2\\\",\\\"description\\\":\\\"Dhaka city tour (Lalbagh Fort, Ahsan Manzil, National Museum, Dhakeshwari Temple).\\\",\\\"key\\\":\\\"7B4cxmiY5z\\\"},{\\\"highlight\\\":\\\"Day 3\\\",\\\"description\\\":\\\"Travel to Bagerhat; visit the Sixty Dome Mosque and other Islamic heritage sites.\\\",\\\"key\\\":\\\"cQJRJsfvri\\\"},{\\\"highlight\\\":\\\"Day 4-6\\\",\\\"description\\\":\\\"Sundarbans exploration with boat safaris, wildlife viewing, and village visits.\\\",\\\"key\\\":\\\"lrG624y6jt\\\"},{\\\"highlight\\\":\\\"Day 7\\\",\\\"description\\\":\\\"Return to Khulna/Dhaka.\\\",\\\"key\\\":\\\"ucB8cpmrpy\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting Price\\\",\\\"priceTaka\\\":40000,\\\"key\\\":\\\"GRzsthTmAb\\\"}]\"', '2024-10-22 17:11:09', '2024-10-22 17:11:09', '\"[{\\\"attraction\\\":\\\"Dhaka\\\",\\\"key\\\":\\\"PCYSWsqQdS\\\"},{\\\"attraction\\\":\\\"Sundarbans\\\",\\\"key\\\":\\\"KLzxjkRcrR\\\"},{\\\"attraction\\\":\\\"Bagerhat\\\",\\\"key\\\":\\\"KrZ2J1KugJ\\\"},{\\\"attraction\\\":\\\"Khulna\\\",\\\"key\\\":\\\"2w0yZxajoC\\\"}]\"'),
(44, 'Yousuf Shakib (admin)', 'Cox’s Bazar, Saint Martin’s Island, Bandarban, Rangamati', 8, 'Adventure, Beach, Nature', 'Southern Coastline and Hill Tracts Adventure', '1729617272110-istockphoto-1167235640-1024x1024.jpg', 'A perfect blend of beach relaxation and hill trekking. From the world\'s longest beach at Cox’s Bazar to the rugged beauty of the Chittagong Hill Tracts, this tour covers the best of southern Bangladesh.\r\n', '[{\"src\":\"1729617272110-logo.png\",\"key\":\"77f48c1a9b377\"},{\"src\":\"1729617272110-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"73d06dc160a7b\"}]', '\"[{\\\"highlight\\\":\\\"Day 1-3\\\",\\\"description\\\":\\\"Relax at Cox’s Bazar Beach and take a day trip to Saint Martin’s Island.\\\",\\\"key\\\":\\\"PzskwN61D9\\\"},{\\\"highlight\\\":\\\"Day 4-5\\\",\\\"description\\\":\\\"Travel to Bandarban for trekking and visits to Nilgiri Hill and Boga Lake.\\\",\\\"key\\\":\\\"qc4To4hDEc\\\"},{\\\"highlight\\\":\\\"Day 6-7\\\",\\\"description\\\":\\\"Explore Rangamati’s Kaptai Lake and tribal villages, with a boat cruise on the lake.\\\",\\\"key\\\":\\\"whLBDYF39o\\\"},{\\\"highlight\\\":\\\"Day 8\\\",\\\"description\\\":\\\"Return to Chittagong/Dhaka.\\\",\\\"key\\\":\\\"Sc4LxNl7vF\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":45000,\\\"key\\\":\\\"x3JGA07COp\\\"}]\"', '2024-10-22 17:14:32', '2024-10-22 17:14:32', '\"[{\\\"attraction\\\":\\\"Cox’s Bazar\\\",\\\"key\\\":\\\"ko5XvOC7yU\\\"},{\\\"attraction\\\":\\\"Saint Martin’s Island\\\",\\\"key\\\":\\\"X4T0mwoL2D\\\"},{\\\"attraction\\\":\\\"Bandarban\\\",\\\"key\\\":\\\"EusYJ3QHmQ\\\"},{\\\"attraction\\\":\\\"Rangamati\\\",\\\"key\\\":\\\"1w61IRYMTt\\\"}]\"'),
(45, 'Yousuf Shakib (admin)', 'Dhaka, Srimangal, Sylhet, Paharpur', 6, 'Cultural, Historical, Nature', 'Cultural Triangle and Tea Garden Escape', '1729617408656-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg', 'Discover the cultural and natural diversity of Bangladesh with a trip through the vibrant capital, the tranquil tea gardens of Srimangal, and the ancient ruins of Paharpur.', '[{\"src\":\"1729617408688-logo.png\",\"key\":\"ac14935060e1\"},{\"src\":\"1729617408688-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"e21b367bbf4e4\"},{\"src\":\"1729617408704-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"6383765b19e89\"}]', '\"[{\\\"highlight\\\":\\\"Day 1-2\\\",\\\"description\\\":\\\"Dhaka city tour (Ahsan Manzil, Liberation War Museum, Old Dhaka).\\\",\\\"key\\\":\\\"85RYQpcbQi\\\"},{\\\"highlight\\\":\\\"Day 3-4\\\",\\\"description\\\":\\\"Srimangal tea garden visit and nature walk in Lawachara National Park.\\\",\\\"key\\\":\\\"dxkeJXQqHc\\\"},{\\\"highlight\\\":\\\"Day 5\\\",\\\"description\\\":\\\"Travel to Sylhet for a tour of Jaflong and Ratargul Swamp Forest.\\\",\\\"key\\\":\\\"EOAQq7QnhY\\\"},{\\\"highlight\\\":\\\"Day 6\\\",\\\"description\\\":\\\"Visit the ancient Buddhist site of Paharpur before returning to Dhaka.\\\",\\\"key\\\":\\\"9hDUnxHjYs\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":20000,\\\"key\\\":\\\"L1qkXgKC2U\\\"}]\"', '2024-10-22 17:16:48', '2024-10-22 17:16:48', '\"[{\\\"attraction\\\":\\\"1.Dhaka\\\",\\\"key\\\":\\\"PMHVscjCLI\\\"},{\\\"attraction\\\":\\\"2.Srimangal\\\",\\\"key\\\":\\\"LpEfNRgQxd\\\"},{\\\"attraction\\\":\\\"3.Sylhet\\\",\\\"key\\\":\\\"nTyfOIh0Rd\\\"},{\\\"attraction\\\":\\\"4. Paharpur\\\",\\\"key\\\":\\\"VwVdKXSdwb\\\"}]\"'),
(46, 'Yousuf Shakib (admin)', 'Western Bangladesh Cultural and Wildlife Tour', 7, 'Cultural, Historical, Wildlife', 'Western Bangladesh Cultural and Wildlife Tour', '1729617531406-sylhet.jpg', 'A perfect mix of history and nature, this tour takes you from the ancient ruins of Mahasthangarh to the wildlife-filled Sundarbans. Visit historic sites, explore local cultures, and enjoy a boat safari.', '[{\"src\":\"1729617531406-sylhet.jpg\",\"key\":\"a0f30042d6016\"},{\"src\":\"1729617531407-sreemangal2.jpg\",\"key\":\"4034610688ed1\"},{\"src\":\"1729617531415-sreemangal1.jpg\",\"key\":\"8cdfe6d831efd\"}]', '\"[{\\\"highlight\\\":\\\"Day 1-2\\\",\\\"description\\\":\\\"Rajshahi city tour, with visits to Barendra Museum and Puthia Temple Complex.\\\",\\\"key\\\":\\\"CZn3a65Slp\\\"},{\\\"highlight\\\":\\\"Day 3\\\",\\\"description\\\":\\\"Mahasthangarh and Paharpur ancient city tour.\\\",\\\"key\\\":\\\"NCRzsqcDah\\\"},{\\\"highlight\\\":\\\"Day 4-6\\\",\\\"description\\\":\\\"Travel to the Sundarbans for a boat safari, wildlife viewing, and village visits.\\\",\\\"key\\\":\\\"PQhoPJt5sO\\\"},{\\\"highlight\\\":\\\"Day 7\\\",\\\"description\\\":\\\"Visit the Sixty Dome Mosque in Bagerhat before returning to Khulna.\\\",\\\"key\\\":\\\"vk6aub4DgT\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":35000,\\\"key\\\":\\\"z9brt8Zcuv\\\"}]\"', '2024-10-22 17:18:51', '2024-10-22 17:18:51', '\"[{\\\"attraction\\\":\\\"Rajshahi\\\",\\\"key\\\":\\\"gSToflldjA\\\"},{\\\"attraction\\\":\\\"Mahasthangarh\\\",\\\"key\\\":\\\"qseM7RfA96\\\"},{\\\"attraction\\\":\\\"Sundarbans\\\",\\\"key\\\":\\\"4QOlD35S0p\\\"},{\\\"attraction\\\":\\\"Bagerhat\\\",\\\"key\\\":\\\"g80wQUPuwh\\\"}]\"'),
(47, 'Yousuf Shakib (admin)', 'Dhaka, Sundarbans, Cox’s Bazar, Bandarban, Sylhet', 12, ' Adventure, Nature, Cultural, Country', 'Ultimate Bangladesh Explorer', '1729617641312-sylhet.jpg', 'This comprehensive tour package covers the best that Bangladesh has to offer. From the bustling capital of Dhaka to the wildlife-rich Sundarbans, the serene beaches of Cox’s Bazar, and the misty hills of Bandarban and Sylhet.', '[{\"src\":\"1729617641315-sylhet.jpg\",\"key\":\"dadd7e2c6d3f4\"},{\"src\":\"1729617641315-sreemangal2.jpg\",\"key\":\"06ac44a15deec\"},{\"src\":\"1729617641327-sreemangal1.jpg\",\"key\":\"293159ea801ab\"}]', '\"[{\\\"highlight\\\":\\\"Day 1-2\\\",\\\"description\\\":\\\"Dhaka city tour.\\\",\\\"key\\\":\\\"adc9r7aLHq\\\"},{\\\"highlight\\\":\\\"Day 3-4\\\",\\\"description\\\":\\\"Sundarbans wildlife adventure.\\\",\\\"key\\\":\\\"x7UtIUT9AW\\\"},{\\\"highlight\\\":\\\"Day 5-6\\\",\\\"description\\\":\\\"Relax on Cox’s Bazar Beach and explore Saint Martin’s Island.\\\",\\\"key\\\":\\\"yLNlJRAgS1\\\"},{\\\"highlight\\\":\\\"Day 7-8\\\",\\\"description\\\":\\\"Bandarban trekking (Nilgiri Hill, Boga Lake).\\\",\\\"key\\\":\\\"E7n4RnT5Qr\\\"},{\\\"highlight\\\":\\\"Day 9-10\\\",\\\"description\\\":\\\"Sylhet tea gardens and Ratargul Swamp Forest tour.\\\",\\\"key\\\":\\\"rnE2IxqlxL\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price 60000\\\",\\\"priceTaka\\\":0,\\\"key\\\":\\\"LWFhJioOEf\\\"}]\"', '2024-10-22 17:20:41', '2024-10-22 17:20:41', '\"[{\\\"attraction\\\":\\\"Dhaka\\\",\\\"key\\\":\\\"zX7uxnDcBt\\\"},{\\\"attraction\\\":\\\"Sundarbans\\\",\\\"key\\\":\\\"3qGhDfQ1QI\\\"},{\\\"attraction\\\":\\\"Cox’s Bazar\\\",\\\"key\\\":\\\"f3CoSZkBFU\\\"},{\\\"attraction\\\":\\\"Bandarban\\\",\\\"key\\\":\\\"eIbNhRDPhO\\\"},{\\\"attraction\\\":\\\"Sylhet\\\",\\\"key\\\":\\\"sNR1dSnam9\\\"}]\"');

-- --------------------------------------------------------

--
-- Table structure for table `PopularPackages`
--

CREATE TABLE `PopularPackages` (
  `id` int(11) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `days` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Contacts`
--
ALTER TABLE `Contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Packages`
--
ALTER TABLE `Packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `PopularPackages`
--
ALTER TABLE `PopularPackages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Contacts`
--
ALTER TABLE `Contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Packages`
--
ALTER TABLE `Packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `PopularPackages`
--
ALTER TABLE `PopularPackages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
