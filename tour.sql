-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 29, 2024 at 03:01 AM
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
-- Table structure for table `CompanyInfos`
--

CREATE TABLE `CompanyInfos` (
  `id` int(11) NOT NULL,
  `companyName` varchar(255) DEFAULT NULL,
  `companyEmail` varchar(255) DEFAULT NULL,
  `companyPhoneNo` varchar(255) DEFAULT NULL,
  `receptionOffice` varchar(255) DEFAULT NULL,
  `receptionHours` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `facebookLink` varchar(255) DEFAULT NULL,
  `instagramLink` varchar(255) DEFAULT NULL,
  `tweeterLink` varchar(255) DEFAULT NULL,
  `aboutUs` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `CompanyInfos`
--

INSERT INTO `CompanyInfos` (`id`, `companyName`, `companyEmail`, `companyPhoneNo`, `receptionOffice`, `receptionHours`, `latitude`, `longitude`, `facebookLink`, `instagramLink`, `tweeterLink`, `aboutUs`, `createdAt`, `updatedAt`) VALUES
(1, 'IGL TOUR', 'igltour', '01958-66699', 'House # 33A(4th Floor), Road # 4, Dhanmondi, Dhaka-1205, Bangladesh', '9:00 AM - 6:00 PM', '23.740824', '90.378509', 'https://www.facebook.com/IGLWebLtd/', '#', 'https://x.com/iglwebltd', 'IGL Web Ltd is Software company since 2007 in Bangladesh location but services provide any country in the World about software, website development, web hosting, domain registration. but others services like server and network environment installation only in Bangladesh based service and support. IGL Web Ltd is a sister concern of IGL Group', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
(3, 'Rakibul Hasal', '0135345353', 'reslass53@gmail.com', 7, 7, '2024-11-08 00:00:00', 'Sundarbans', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan', '2024-10-22 17:27:24', '2024-10-22 17:27:24'),
(4, 'Obaidul', '01782889909', 'Email@gmail.com', 4, 4, '2024-11-01 00:00:00', 'Srimangal', 'uuuuii', '2024-10-25 12:12:20', '2024-10-25 12:12:20');

-- --------------------------------------------------------

--
-- Table structure for table `Images`
--

CREATE TABLE `Images` (
  `id` int(11) NOT NULL,
  `packageHeroImg` varchar(255) DEFAULT NULL,
  `aboutHeroImg` varchar(255) DEFAULT NULL,
  `homeHeroImg` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `placesToVistHeroImg` varchar(255) DEFAULT NULL,
  `meetBangladeshHeroImg` varchar(255) DEFAULT NULL,
  `contactUsHeroImg` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Images`
--

INSERT INTO `Images` (`id`, `packageHeroImg`, `aboutHeroImg`, `homeHeroImg`, `logo`, `placesToVistHeroImg`, `meetBangladeshHeroImg`, `contactUsHeroImg`, `createdAt`, `updatedAt`) VALUES
(9, 'packageHeroImg-1729958523575-453898360.jpg', 'aboutHeroImg-1729660692719-893951306.jpg', 'homeHeroImg-1729660692707-83254369.jpg', 'logo-1729958523574-588109526.png', 'placesToVistHeroImg-1729660692720-840001087.jpg', 'meetBangladeshHeroImg-1729660692962-6010556.jpg', 'contactUsHeroImg-1729958523582-437936970.jpg', '0000-00-00 00:00:00', '2024-10-26 16:02:03');

-- --------------------------------------------------------

--
-- Table structure for table `PackagePlaces`
--

CREATE TABLE `PackagePlaces` (
  `id` int(11) NOT NULL,
  `placeName` varchar(255) NOT NULL,
  `division` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `key` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `PackagePlaces`
--

INSERT INTO `PackagePlaces` (`id`, `placeName`, `division`, `district`, `key`, `createdAt`, `updatedAt`) VALUES
(2, 'Cox\'s Bazar Beach', 'Chattogram', 'Cox\'s Bazar', 'pPOl5U', '2024-10-28 17:03:58', '2024-10-28 17:03:58'),
(3, 'Saint Martin’s Island', 'Chattogram', 'Cox\'s Bazar', 'ujAd4x', '2024-10-28 17:04:18', '2024-10-28 17:04:18'),
(4, 'Sundarbans Mangrove Forest', 'Khulna', 'Satkhira', 'kQebaW', '2024-10-28 17:04:51', '2024-10-28 17:04:51'),
(5, 'Ratargul Swamp Forest', 'Sylhet', 'Sylhet', 'yuGF4L', '2024-10-28 17:05:07', '2024-10-28 17:05:07'),
(6, 'Jaflong', 'Sylhet', 'Sylhet', '9205mk', '2024-10-28 17:05:20', '2024-10-28 17:05:20'),
(7, 'Srimangal (Tea Capital)', 'Sylhet', 'Moulvibazar', 'KXZlb3', '2024-10-28 17:05:41', '2024-10-28 17:05:41'),
(8, 'Paharpur Buddhist Vihara', 'Rajshahi', 'Naogaon', 'RnS590', '2024-10-28 17:05:59', '2024-10-28 17:05:59'),
(9, 'Ahsan Manzil (Pink Palace)', 'Dhaka', 'Dhaka', 'Pcx8q0', '2024-10-28 17:06:12', '2024-10-28 17:06:12'),
(10, 'Sajek Valley', 'Chattogram', 'Rangamati', 'AE3Suw', '2024-10-28 17:06:26', '2024-10-28 17:06:26'),
(11, 'Bandarban Hill Tracts', 'Chattogram', 'Bandarban', 'sGOnf0', '2024-10-28 17:06:48', '2024-10-28 17:06:48'),
(12, 'Lalbagh Fort', 'Dhaka', 'Dhaka', 'kseov2', '2024-10-28 17:07:05', '2024-10-28 17:07:05'),
(13, 'Mahasthangarh ', 'Rajshahi', 'Bogura', 'H69nmX', '2024-10-28 17:07:22', '2024-10-28 17:07:22'),
(14, 'Kuakata Sea Beach', 'Barishal', 'Patuakhali', 'Ltmkyg', '2024-10-28 17:07:38', '2024-10-28 17:07:38'),
(15, 'Sonargaon', 'Dhaka', 'Narayanganj', 'TfZNdg', '2024-10-28 17:08:05', '2024-10-28 17:08:05'),
(16, 'Kaptai Lake', 'Chattogram', 'Rangamati', 'UH1cxd', '2024-10-28 17:08:20', '2024-10-28 17:08:20');

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
(33, 'Yousuf Shakib (admin)', 'Sundarbans Mangrove Adventure', 3, 'Adventure, Wildlife', 'Sundarbans Mangrove Adventure', '1729615675812-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg', 'Explore the UNESCO World Heritage site of Sundarbans, home to the Royal Bengal Tiger and diverse wildlife. Experience boat safaris, nature walks, and immerse yourself in the beauty of the mangroves.', '[{\"src\":\"1729615676046-logo.png\",\"key\":\"c09cad948db43\"},{\"src\":\"1729615676046-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"60a6eeac2c00f\"}]', '\"[{\\\"highlight\\\":\\\"Day 1\\\",\\\"description\\\":\\\"Guided boat tour through the Sundarbans.\\\",\\\"key\\\":\\\"MVIW0lvjkQ\\\"},{\\\"highlight\\\":\\\"Day 2\\\",\\\"description\\\":\\\"Wildlife safari with chances to spot tigers, crocodiles, and rare birds.\\\",\\\"key\\\":\\\"zb1HC8jIht\\\"},{\\\"highlight\\\":\\\"Day 3\\\",\\\"description\\\":\\\"Visit local villages and experience traditional honey harvesting.\\\",\\\"key\\\":\\\"aFvQo2qbbQ\\\"},{\\\"highlight\\\":\\\"Day 3\\\",\\\"description\\\":\\\"Camping under the stars.\\\",\\\"key\\\":\\\"t6MXQWkiSc\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting Price\\\",\\\"priceTaka\\\":15000,\\\"key\\\":\\\"wqRqcFhVQP\\\"}]\"', '2024-10-22 16:47:56', '2024-10-23 09:11:03', '\"[{\\\"attraction\\\":\\\"Sundarbans Mangrove Forest\\\",\\\"key\\\":\\\"08gtWoztbt\\\"},{\\\"attraction\\\":\\\"Royal Bengal Tiger\\\",\\\"key\\\":\\\"55f5LW7dTm\\\"},{\\\"attraction\\\":\\\"Wildlife Safari\\\",\\\"key\\\":\\\"TEWOgkRi8y\\\"}]\"'),
(34, 'Yousuf Shakib (admin)', 'Cox’s Bazar', 4, 'Beach, Leisure', 'Cox’s Bazar Beach Getaway', '1729615839844-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg', 'A luxury beach vacation on the world’s longest natural sea beach. Relax, swim, and explore the serene beauty of Cox’s Bazar, with day trips to nearby islands and national parks.', '[{\"src\":\"1729615839884-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"3ea0017de4a1d\"},{\"src\":\"1729615839898-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"971b2208be481\"}]', '\"[{\\\"highlight\\\":\\\"Day 1-2\\\",\\\"description\\\":\\\"Stay at a luxury beachfront resort.\\\",\\\"key\\\":\\\"qINAiAFUj3\\\"},{\\\"highlight\\\":\\\"Day 2\\\",\\\"description\\\":\\\"Relax on Cox’s Bazar Beach.\\\",\\\"key\\\":\\\"xZiq74e0yw\\\"},{\\\"highlight\\\":\\\"Day 3\\\",\\\"description\\\":\\\"Visit Saint Martin’s Island and enjoy snorkeling.\\\",\\\"key\\\":\\\"YSAKwvw9VF\\\"},{\\\"highlight\\\":\\\"Day 4\\\",\\\"description\\\":\\\"Explore Himchari National Park and Inani Beach.\\\",\\\"key\\\":\\\"5kxT5fqEso\\\"},{\\\"highlight\\\":\\\"Day 4\\\",\\\"description\\\":\\\"Beach BBQ dinner.\\\",\\\"key\\\":\\\"7TwKtojw9U\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":25000,\\\"key\\\":\\\"fbyQDXFKkZ\\\"}]\"', '2024-10-22 16:50:39', '2024-10-23 03:35:55', '\"[{\\\"attraction\\\":\\\"Cox\'s Bazar Beach\\\",\\\"key\\\":\\\"BPnF2cBDSX\\\"},{\\\"attraction\\\":\\\"Himchari National Park\\\",\\\"key\\\":\\\"NfBWbQGvtt\\\"},{\\\"attraction\\\":\\\"Saint Martin’s Island\\\",\\\"key\\\":\\\"FFbDyMFdX9\\\"}]\"'),
(35, 'Yousuf Shakib (admin)', 'Dhaka', 2, 'Cultural, Historical', 'Historic Dhaka City Exploration', '1729615950523-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg', 'Discover the rich history and cultural heritage of Bangladesh\'s capital, Dhaka. Visit historic sites, explore bustling markets, and enjoy traditional cuisine.', '[{\"src\":\"1729615950556-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"2db65f436c934\"},{\"src\":\"1729615950581-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"ade44ed5dfeb5\"}]', '\"[{\\\"highlight\\\":\\\"Day 1\\\",\\\"description\\\":\\\"Visit Lalbagh Fort, Ahsan Manzil, and Dhakeshwari Temple.\\\",\\\"key\\\":\\\"5s1ddbJSco\\\"},{\\\"highlight\\\":\\\"Day 1\\\",\\\"description\\\":\\\"Explore Old Dhaka and its street food culture.\\\",\\\"key\\\":\\\"wV3z1P6hcG\\\"},{\\\"highlight\\\":\\\"Day 2\\\",\\\"description\\\":\\\"Boat ride on the Buriganga River.\\\",\\\"key\\\":\\\"Eh8sKThgcn\\\"},{\\\"highlight\\\":\\\"Day 2\\\",\\\"description\\\":\\\"our National Museum and Liberation War Museum.\\\",\\\"key\\\":\\\"63NFsO3yfw\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting Price\\\",\\\"priceTaka\\\":10000,\\\"key\\\":\\\"q2HO2PCNBZ\\\"}]\"', '2024-10-22 16:52:30', '2024-10-23 03:34:02', '\"[{\\\"attraction\\\":\\\"Lalbagh Fort\\\",\\\"key\\\":\\\"kCrJHY9wgi\\\"},{\\\"attraction\\\":\\\"Ahsan Manzil\\\",\\\"key\\\":\\\"YweAM8m8f0\\\"},{\\\"attraction\\\":\\\"Old Dhaka\\\",\\\"key\\\":\\\"2rzQuQC2ic\\\"}]\"'),
(36, 'Yousuf Shakib (admin)', 'Sylhet', 3, 'Nature, Relaxation', 'Sylhet Tea Garden Escape', '1729616097574-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg', 'Escape to the tranquil tea estates of Sylhet. Explore lush greenery, peaceful waterways, and local culture, with plenty of opportunities for relaxation and tea tasting.', '[{\"src\":\"1729616097605-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"7683539bd3e37\"},{\"src\":\"1729616097642-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"cf1ff6facb207\"}]', '\"[{\\\"highlight\\\":\\\"Day 1\\\",\\\"description\\\":\\\"Stay in a serene tea estate.\\\",\\\"key\\\":\\\"mPi3gm3Now\\\"},{\\\"highlight\\\":\\\"Day 2\\\",\\\"description\\\":\\\"Visit Jaflong for scenic views of the Khasi Hills.\\\",\\\"key\\\":\\\"qfSP4rnhgN\\\"},{\\\"highlight\\\":\\\"Day 3\\\",\\\"description\\\":\\\"Explore Ratargul Swamp Forest by boat.\\\",\\\"key\\\":\\\"M7DclARmfG\\\"},{\\\"highlight\\\":\\\"Day 3\\\",\\\"description\\\":\\\"Tea tasting sessions.\\\",\\\"key\\\":\\\"cYbvDxOJOj\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting Price\\\",\\\"priceTaka\\\":17500,\\\"key\\\":\\\"MRWYvAdGlD\\\"}]\"', '2024-10-22 16:54:57', '2024-10-23 03:40:11', '\"[{\\\"attraction\\\":\\\"Sylhet Tea Estates\\\",\\\"key\\\":\\\"bX41nkTQeD\\\"},{\\\"attraction\\\":\\\"Ratargul Swamp Forest,\\\",\\\"key\\\":\\\"IvNxILxRW2\\\"},{\\\"attraction\\\":\\\"Jaflong\\\",\\\"key\\\":\\\"fJ9RtMO9sy\\\"},{\\\"attraction\\\":\\\"Bholagonj\\\",\\\"key\\\":\\\"UFz0cizOoq\\\"}]\"'),
(37, 'Yousuf Shakib (admin)', 'Bandarban', 4, 'Adventure, Nature', 'Bandarban Hill Tracts Adventure', '1729616223762-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg', 'Adventure through the rugged landscapes of Bandarban. Hike through hills, discover hidden waterfalls, and experience the indigenous culture of the hill tribes.', '[{\"src\":\"1729616223785-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"7f9393da675d2\"},{\"src\":\"1729616223786-beach.jpg\",\"key\":\"c4f96c7a1d774\"}]', '\"[{\\\"highlight\\\":\\\"Day 1\\\",\\\"description\\\":\\\"Trekking through the scenic hills.\\\",\\\"key\\\":\\\"kB5zkRSo3d\\\"},{\\\"highlight\\\":\\\"Day 2\\\",\\\"description\\\":\\\"Visit Nilgiri Hill, Boga Lake, and Nafakhum Waterfall.\\\",\\\"key\\\":\\\"B5hJIH58OM\\\"},{\\\"highlight\\\":\\\"Day 3\\\",\\\"description\\\":\\\"Explore tribal villages and interact with local communities.\\\",\\\"key\\\":\\\"Sd3gnXD7FX\\\"},{\\\"highlight\\\":\\\"Day 4\\\",\\\"description\\\":\\\"River cruise on the Sangu River.\\\",\\\"key\\\":\\\"vbyiFWasSP\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Price\\\",\\\"priceTaka\\\":20000,\\\"key\\\":\\\"49Rj0hpFgd\\\"}]\"', '2024-10-22 16:57:03', '2024-10-23 03:39:19', '\"[{\\\"attraction\\\":\\\"Nilgiri Hill\\\",\\\"key\\\":\\\"wy3oeT9WZo\\\"},{\\\"attraction\\\":\\\"Boga Lake\\\",\\\"key\\\":\\\"FXDI0SGkCe\\\"},{\\\"attraction\\\":\\\"Nafakhum Waterfall\\\",\\\"key\\\":\\\"XzPd9lY1NB\\\"}]\"'),
(38, 'Yousuf Shakib (admin)', 'Rangamati', 2, 'Cultural, Nature', 'Rangamati Lake and Tribal Culture Tour', '1729616315129-logo.png', 'Discover the scenic beauty of Rangamati and its vibrant tribal culture. Cruise on Kaptai Lake, visit local villages, and experience the tranquility of the hill tracts.', '[{\"src\":\"1729616315130-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"14c44cda48575\"},{\"src\":\"1729616315157-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"866438e417a3a\"}]', '\"[{\\\"highlight\\\":\\\"Day 1\\\",\\\"description\\\":\\\"Boat cruise on Kaptai Lake.\\\",\\\"key\\\":\\\"oEyxQNSuVd\\\"},{\\\"highlight\\\":\\\"Day 1\\\",\\\"description\\\":\\\"L Visit Chakma tribal village and experience local crafts.\\\",\\\"key\\\":\\\"RBVmJ6vCYv\\\"},{\\\"highlight\\\":\\\"Day 2\\\",\\\"description\\\":\\\"Explore waterfalls and scenic viewpoints.\\\",\\\"key\\\":\\\"VWtDFSfFck\\\"},{\\\"highlight\\\":\\\"Day 2\\\",\\\"description\\\":\\\"Visit the Hanging Bridge and Buddhist temples.\\\",\\\"key\\\":\\\"ZhecrQyiCQ\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":9000,\\\"key\\\":\\\"eR7xZK6NQr\\\"}]\"', '2024-10-22 16:58:35', '2024-10-23 03:38:34', '\"[{\\\"attraction\\\":\\\"Kaptai Lake\\\",\\\"key\\\":\\\"OMWy9ugcot\\\"},{\\\"attraction\\\":\\\"Chakma Tribe\\\",\\\"key\\\":\\\"TGOQFKnO7X\\\"},{\\\"attraction\\\":\\\"Hanging Bridge\\\",\\\"key\\\":\\\"qTRcxwNMQ3\\\"}]\"'),
(39, 'Yousuf Shakib (admin)', 'Srimangal', 8, 'Nature, Relaxation', 'Srimangal Tea Garden and Rainforest Experience', '1729616420996-31222074-0742-4807-84d7-1912b521e1c7.webp', 'Immerse yourself in the serene beauty of Srimangal, famous for its tea gardens and natural rainforest. Explore diverse wildlife, rolling tea plantations, and peaceful lakes.', '[{\"src\":\"1729616421049-sylhet.jpg\",\"key\":\"5bac4435c72af\"},{\"src\":\"1729616421050-sreemangal2.jpg\",\"key\":\"f0b88a0983918\"},{\"src\":\"1729616421058-sreemangal1.jpg\",\"key\":\"54e275ffeddce\"}]', '\"[{\\\"highlight\\\":\\\"Day 1-2\\\",\\\"description\\\":\\\"Trek through Lawachara National Park to spot rare species like the Hoolock Gibbon.\\\",\\\"key\\\":\\\"xH2D1GEy6Q\\\"},{\\\"highlight\\\":\\\"Day 3-4\\\",\\\"description\\\":\\\"Visit tea gardens and enjoy guided tea tasting.\\\",\\\"key\\\":\\\"yD0gRNEsl4\\\"},{\\\"highlight\\\":\\\"Day 5-6\\\",\\\"description\\\":\\\"Boat ride on Madhabpur Lake.\\\",\\\"key\\\":\\\"TIcd4xjcq7\\\"},{\\\"highlight\\\":\\\"Day 7-8\\\",\\\"description\\\":\\\"Experience the rich cultural heritage of local ethnic communities.\\\",\\\"key\\\":\\\"ePhAKHld0b\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":40000,\\\"key\\\":\\\"FmDXbbytjc\\\"}]\"', '2024-10-22 17:00:21', '2024-10-23 03:30:30', '\"[{\\\"attraction\\\":\\\"Lawachara National Park\\\",\\\"key\\\":\\\"Z8T0eKA8Lq\\\"},{\\\"attraction\\\":\\\"Srimangal Tea Gardens\\\",\\\"key\\\":\\\"tNZTJ3iuR1\\\"},{\\\"attraction\\\":\\\"Madhabpur Lake\\\",\\\"key\\\":\\\"rvDZbycNoa\\\"}]\"'),
(40, 'Yousuf Shakib (admin)', 'Paharpur, Mahasthangarh', 2, 'Historical, Cultural', 'Paharpur and Mahasthangarh Ancient Civilization Tour', '1729616554192-istockphoto-1167235640-1024x1024.jpg', 'Explore the ancient ruins of Paharpur, a UNESCO World Heritage site, and Mahasthangarh, one of the earliest urban archaeological sites in Bangladesh. A journey back to the glorious past of South Asian civilizations.', '[{\"src\":\"1729616554193-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"66bdd76ade53b\"},{\"src\":\"1729616554193-31222074-0742-4807-84d7-1912b521e1c7.webp\",\"key\":\"eabd87b785d2e\"}]', '\"[{\\\"highlight\\\":\\\"Day 1\\\",\\\"description\\\":\\\"Visit the ruins of Somapura Mahavihara in Paharpur.\\\",\\\"key\\\":\\\"7MUVAps3lU\\\"},{\\\"highlight\\\":\\\"Day 1\\\",\\\"description\\\":\\\"Explore Mahasthangarh, an ancient city dating back to the 3rd century BC.\\\",\\\"key\\\":\\\"LsGv1ziEGo\\\"},{\\\"highlight\\\":\\\"Day 2\\\",\\\"description\\\":\\\"Learn about the rich Buddhist, Hindu, and Muslim heritage of the region.\\\",\\\"key\\\":\\\"zYTyViLaCy\\\"},{\\\"highlight\\\":\\\"Day 2\\\",\\\"description\\\":\\\"Visit nearby museums and historical landmarks.\\\",\\\"key\\\":\\\"5H9F7oPQ5x\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Price\\\",\\\"priceTaka\\\":7000,\\\"key\\\":\\\"Ni61RtdITq\\\"}]\"', '2024-10-22 17:02:34', '2024-10-23 03:32:35', '\"[{\\\"attraction\\\":\\\"Paharpur Buddhist Monastery\\\",\\\"key\\\":\\\"nheFaYOgg2\\\"},{\\\"attraction\\\":\\\"Mahasthangarh Ancient City\\\",\\\"key\\\":\\\"0Ef4s6GWNb\\\"}]\"'),
(41, 'Yousuf Shakib (admin)', 'Kuakata', 3, 'Beach, Nature', 'Kuakata Beach and Mangrove Forest Retreat', '1729616663925-sreemangal2.jpg', 'Relax at the picturesque Kuakata Beach, where you can view both sunrise and sunset over the ocean. Explore nearby mangrove forests and local fishing villages.', '[{\"src\":\"1729616663935-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"ee9a8d12f99f\"},{\"src\":\"1729616663951-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"afd57cd2a14ce\"}]', '\"[{\\\"highlight\\\":\\\"Day 1\\\",\\\"description\\\":\\\"Beachfront stay with sunrise and sunset views.\\\",\\\"key\\\":\\\"sxZuuPO4F6\\\"},{\\\"highlight\\\":\\\"Day 1\\\",\\\"description\\\":\\\"Boat trip to Fatrar Char Mangrove Forest.\\\",\\\"key\\\":\\\"DbFOqpzDwY\\\"},{\\\"highlight\\\":\\\"Day 2\\\",\\\"description\\\":\\\"Visit Lebur Char, a small scenic island off Kuakata.\\\",\\\"key\\\":\\\"APs9oZMl90\\\"},{\\\"highlight\\\":\\\"Day 3\\\",\\\"description\\\":\\\"Enjoy fresh seafood and local cuisine.\\\",\\\"key\\\":\\\"0ImE9TgVcV\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting Price\\\",\\\"priceTaka\\\":16000,\\\"key\\\":\\\"dJnUNHZ8Mb\\\"}]\"', '2024-10-22 17:04:23', '2024-10-23 03:28:48', '\"[{\\\"attraction\\\":\\\"Kuakata Beach\\\",\\\"key\\\":\\\"MpeEl93CT6\\\"},{\\\"attraction\\\":\\\"Fatrar Char Mangrove Forest\\\",\\\"key\\\":\\\"pUFhlTb5Az\\\"},{\\\"attraction\\\":\\\"Lebur Char\\\",\\\"key\\\":\\\"zqvikpGTMv\\\"}]\"'),
(42, 'Yousuf Shakib (admin)', 'Bagerhat', 2, 'Historical, Cultural', 'Bagerhat Historical and Mosque City Tour', '1729616763900-sreemangal2.jpg', 'Visit the UNESCO-listed Mosque City of Bagerhat, a 15th-century historical marvel with magnificent Islamic architecture and cultural heritage.', '[{\"src\":\"1729616763909-sylhet.jpg\",\"key\":\"032747c9ee418\"},{\"src\":\"1729616763909-sreemangal1.jpg\",\"key\":\"4ff945a050bbf\"},{\"src\":\"1729616763913-logo.png\",\"key\":\"281f34c98221b\"}]', '\"[{\\\"highlight\\\":\\\"Day 1\\\",\\\"description\\\":\\\"Explore the famous Sixty Dome Mosque, a masterpiece of medieval architecture.\\\",\\\"key\\\":\\\"nvvEasYtIK\\\"},{\\\"highlight\\\":\\\"Day 1\\\",\\\"description\\\":\\\"Visit the tomb of Khan Jahan Ali, the founder of Bagerhat.\\\",\\\"key\\\":\\\"4abDiObcb8\\\"},{\\\"highlight\\\":\\\"Day 2\\\",\\\"description\\\":\\\"Learn about the rich Islamic history of the region.\\\",\\\"key\\\":\\\"v8HYtEo4de\\\"},{\\\"highlight\\\":\\\"Day 3\\\",\\\"description\\\":\\\"Visit other mosques and historical buildings in Bagerhat.\\\",\\\"key\\\":\\\"ssrwLe4G9e\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":5000,\\\"key\\\":\\\"r2EKRpxiZY\\\"}]\"', '2024-10-22 17:06:03', '2024-10-23 03:26:58', '\"[{\\\"attraction\\\":\\\"Sixty Dome Mosque\\\",\\\"key\\\":\\\"OOE03EXheB\\\"},{\\\"attraction\\\":\\\"Khan Jahan Ali’s Tomb\\\",\\\"key\\\":\\\"sr58sPHsjS\\\"},{\\\"attraction\\\":\\\"Bagerhat\\\",\\\"key\\\":\\\"50gPEjkDVh\\\"}]\"'),
(43, 'Yousuf Shakib (admin)', 'Dhaka, Bagerhat, Khulna', 7, 'Cultural, Nature, Wildlife', 'Bangladesh Heritage and Nature Expedition', '1729617068982-31222074-0742-4807-84d7-1912b521e1c7.webp', 'Experience the diverse heritage and natural wonders of Bangladesh. Start with the vibrant capital of Dhaka, explore the historic Mosque City of Bagerhat, and finish with a wildlife adventure in the Sundarbans.', '[{\"src\":\"1729617068983-logo.png\",\"key\":\"07cb79330e528\"},{\"src\":\"1729617068983-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"a39e3f9922457\"},{\"src\":\"1729617069011-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"fcca72b13ecc3\"}]', '\"[{\\\"highlight\\\":\\\"Day 1-2\\\",\\\"description\\\":\\\"Dhaka city tour (Lalbagh Fort, Ahsan Manzil, National Museum, Dhakeshwari Temple).\\\",\\\"key\\\":\\\"T3k9pfwng6\\\"},{\\\"highlight\\\":\\\"Day 3\\\",\\\"description\\\":\\\"Travel to Bagerhat; visit the Sixty Dome Mosque and other Islamic heritage sites.\\\",\\\"key\\\":\\\"t8sPztmhhR\\\"},{\\\"highlight\\\":\\\"Day 4-6\\\",\\\"description\\\":\\\"Sundarbans exploration with boat safaris, wildlife viewing, and village visits.\\\",\\\"key\\\":\\\"hxtWI4I6vs\\\"},{\\\"highlight\\\":\\\"Day 7\\\",\\\"description\\\":\\\"Return to Khulna/Dhaka.\\\",\\\"key\\\":\\\"IobV5FC0hd\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting Price\\\",\\\"priceTaka\\\":40000,\\\"key\\\":\\\"sjSJPPJPzk\\\"}]\"', '2024-10-22 17:11:09', '2024-10-23 03:24:05', '\"[{\\\"attraction\\\":\\\"Dhaka\\\",\\\"key\\\":\\\"5sfM6wYd4R\\\"},{\\\"attraction\\\":\\\"Sundarbans\\\",\\\"key\\\":\\\"GXbeExXq2m\\\"},{\\\"attraction\\\":\\\"Bagerhat\\\",\\\"key\\\":\\\"lBHlDzyye7\\\"},{\\\"attraction\\\":\\\"Khulna\\\",\\\"key\\\":\\\"lwDRp5Lv4q\\\"}]\"'),
(44, 'Yousuf Shakib (admin)', 'Cox’s Bazar, Saint Martin’s Island, Bandarban, Rangamati', 8, 'Adventure, Beach, Nature', 'Southern Coastline and Hill Tracts Adventure', '1729617272110-istockphoto-1167235640-1024x1024.jpg', 'A perfect blend of beach relaxation and hill trekking. From the world\'s longest beach at Cox’s Bazar to the rugged beauty of the Chittagong Hill Tracts, this tour covers the best of southern Bangladesh.\r\n', '[{\"src\":\"1729617272110-logo.png\",\"key\":\"77f48c1a9b377\"},{\"src\":\"1729617272110-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"73d06dc160a7b\"}]', '\"[{\\\"highlight\\\":\\\"Day 1-3\\\",\\\"description\\\":\\\"Relax at Cox’s Bazar Beach and take a day trip to Saint Martin’s Island.\\\",\\\"key\\\":\\\"PzskwN61D9\\\"},{\\\"highlight\\\":\\\"Day 4-5\\\",\\\"description\\\":\\\"Travel to Bandarban for trekking and visits to Nilgiri Hill and Boga Lake.\\\",\\\"key\\\":\\\"qc4To4hDEc\\\"},{\\\"highlight\\\":\\\"Day 6-7\\\",\\\"description\\\":\\\"Explore Rangamati’s Kaptai Lake and tribal villages, with a boat cruise on the lake.\\\",\\\"key\\\":\\\"whLBDYF39o\\\"},{\\\"highlight\\\":\\\"Day 8\\\",\\\"description\\\":\\\"Return to Chittagong/Dhaka.\\\",\\\"key\\\":\\\"Sc4LxNl7vF\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":45000,\\\"key\\\":\\\"x3JGA07COp\\\"}]\"', '2024-10-22 17:14:32', '2024-10-22 17:14:32', '\"[{\\\"attraction\\\":\\\"Cox’s Bazar\\\",\\\"key\\\":\\\"ko5XvOC7yU\\\"},{\\\"attraction\\\":\\\"Saint Martin’s Island\\\",\\\"key\\\":\\\"X4T0mwoL2D\\\"},{\\\"attraction\\\":\\\"Bandarban\\\",\\\"key\\\":\\\"EusYJ3QHmQ\\\"},{\\\"attraction\\\":\\\"Rangamati\\\",\\\"key\\\":\\\"1w61IRYMTt\\\"}]\"'),
(45, 'Yousuf Shakib (admin)', 'Dhaka, Srimangal, Sylhet, Paharpur', 6, 'Cultural, Historical, Nature', 'Cultural Triangle and Tea Garden Escape', '1729617408656-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg', 'Discover the cultural and natural diversity of Bangladesh with a trip through the vibrant capital, the tranquil tea gardens of Srimangal, and the ancient ruins of Paharpur.', '[{\"src\":\"1729617408688-logo.png\",\"key\":\"ac14935060e1\"},{\"src\":\"1729617408688-jcob-nasyr-67sVPjK6Q7I-unsplash.jpg\",\"key\":\"e21b367bbf4e4\"},{\"src\":\"1729617408704-istockphoto-1167235640-1024x1024.jpg\",\"key\":\"6383765b19e89\"}]', '\"[{\\\"highlight\\\":\\\"Day 1-2\\\",\\\"description\\\":\\\"Dhaka city tour (Ahsan Manzil, Liberation War Museum, Old Dhaka).\\\",\\\"key\\\":\\\"85RYQpcbQi\\\"},{\\\"highlight\\\":\\\"Day 3-4\\\",\\\"description\\\":\\\"Srimangal tea garden visit and nature walk in Lawachara National Park.\\\",\\\"key\\\":\\\"dxkeJXQqHc\\\"},{\\\"highlight\\\":\\\"Day 5\\\",\\\"description\\\":\\\"Travel to Sylhet for a tour of Jaflong and Ratargul Swamp Forest.\\\",\\\"key\\\":\\\"EOAQq7QnhY\\\"},{\\\"highlight\\\":\\\"Day 6\\\",\\\"description\\\":\\\"Visit the ancient Buddhist site of Paharpur before returning to Dhaka.\\\",\\\"key\\\":\\\"9hDUnxHjYs\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":20000,\\\"key\\\":\\\"L1qkXgKC2U\\\"}]\"', '2024-10-22 17:16:48', '2024-10-22 17:16:48', '\"[{\\\"attraction\\\":\\\"1.Dhaka\\\",\\\"key\\\":\\\"PMHVscjCLI\\\"},{\\\"attraction\\\":\\\"2.Srimangal\\\",\\\"key\\\":\\\"LpEfNRgQxd\\\"},{\\\"attraction\\\":\\\"3.Sylhet\\\",\\\"key\\\":\\\"nTyfOIh0Rd\\\"},{\\\"attraction\\\":\\\"4. Paharpur\\\",\\\"key\\\":\\\"VwVdKXSdwb\\\"}]\"'),
(46, 'Yousuf Shakib (admin)', 'Western Bangladesh Cultural and Wildlife Tour', 7, 'Cultural, Historical, Wildlife', 'Western Bangladesh Cultural and Wildlife Tour', '1729617531406-sylhet.jpg', 'A perfect mix of history and nature, this tour takes you from the ancient ruins of Mahasthangarh to the wildlife-filled Sundarbans. Visit historic sites, explore local cultures, and enjoy a boat safari.', '[{\"src\":\"1729617531406-sylhet.jpg\",\"key\":\"a0f30042d6016\"},{\"src\":\"1729617531407-sreemangal2.jpg\",\"key\":\"4034610688ed1\"},{\"src\":\"1729617531415-sreemangal1.jpg\",\"key\":\"8cdfe6d831efd\"}]', '\"[{\\\"highlight\\\":\\\"Day 1-2\\\",\\\"description\\\":\\\"Rajshahi city tour, with visits to Barendra Museum and Puthia Temple Complex.\\\",\\\"key\\\":\\\"CZn3a65Slp\\\"},{\\\"highlight\\\":\\\"Day 3\\\",\\\"description\\\":\\\"Mahasthangarh and Paharpur ancient city tour.\\\",\\\"key\\\":\\\"NCRzsqcDah\\\"},{\\\"highlight\\\":\\\"Day 4-6\\\",\\\"description\\\":\\\"Travel to the Sundarbans for a boat safari, wildlife viewing, and village visits.\\\",\\\"key\\\":\\\"PQhoPJt5sO\\\"},{\\\"highlight\\\":\\\"Day 7\\\",\\\"description\\\":\\\"Visit the Sixty Dome Mosque in Bagerhat before returning to Khulna.\\\",\\\"key\\\":\\\"vk6aub4DgT\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":35000,\\\"key\\\":\\\"z9brt8Zcuv\\\"}]\"', '2024-10-22 17:18:51', '2024-10-22 17:18:51', '\"[{\\\"attraction\\\":\\\"Rajshahi\\\",\\\"key\\\":\\\"gSToflldjA\\\"},{\\\"attraction\\\":\\\"Mahasthangarh\\\",\\\"key\\\":\\\"qseM7RfA96\\\"},{\\\"attraction\\\":\\\"Sundarbans\\\",\\\"key\\\":\\\"4QOlD35S0p\\\"},{\\\"attraction\\\":\\\"Bagerhat\\\",\\\"key\\\":\\\"g80wQUPuwh\\\"}]\"'),
(47, 'Yousuf Shakib (admin)', 'Dhaka, Sundarbans, Cox’s Bazar, Bandarban, Sylhet', 12, ' Adventure, Nature, Cultural, Country', 'Ultimate Bangladesh Explorer', '1729617641312-sylhet.jpg', 'This comprehensive tour package covers the best that Bangladesh has to offer. From the bustling capital of Dhaka to the wildlife-rich Sundarbans, the serene beaches of Cox’s Bazar, and the misty hills of Bandarban and Sylhet.', '[{\"src\":\"1729617641315-sylhet.jpg\",\"key\":\"d2eda913f38d1\"},{\"src\":\"1729617641315-sreemangal2.jpg\",\"key\":\"d872618e42487\"},{\"src\":\"1729617641327-sreemangal1.jpg\",\"key\":\"30c29a74baaf2\"}]', '\"[{\\\"highlight\\\":\\\"Day 1-2\\\",\\\"description\\\":\\\"Dhaka city tour.\\\",\\\"key\\\":\\\"EJsYvfMVgH\\\"},{\\\"highlight\\\":\\\"Day 3-4\\\",\\\"description\\\":\\\"Sundarbans wildlife adventure.\\\",\\\"key\\\":\\\"seFpMmJTfm\\\"},{\\\"highlight\\\":\\\"Day 5-6\\\",\\\"description\\\":\\\"Relax on Cox’s Bazar Beach and explore Saint Martin’s Island.\\\",\\\"key\\\":\\\"vZXLAKRnhW\\\"},{\\\"highlight\\\":\\\"Day 7-8\\\",\\\"description\\\":\\\"Bandarban trekking (Nilgiri Hill, Boga Lake).\\\",\\\"key\\\":\\\"2tIHLz98nw\\\"},{\\\"highlight\\\":\\\"Day 9-12\\\",\\\"description\\\":\\\"Sylhet tea gardens and Ratargul Swamp Forest tour.\\\",\\\"key\\\":\\\"xSz6szFka1\\\"}]\"', '\"[{\\\"priceType\\\":\\\"Starting price\\\",\\\"priceTaka\\\":60000,\\\"key\\\":\\\"jriXcmbIN1\\\"}]\"', '2024-10-22 17:20:41', '2024-10-25 12:15:15', '\"[{\\\"attraction\\\":\\\"Dhaka\\\",\\\"key\\\":\\\"HsO7hAKVvt\\\"},{\\\"attraction\\\":\\\"Sundarbans\\\",\\\"key\\\":\\\"Cjxg7T0mC7\\\"},{\\\"attraction\\\":\\\"Cox’s Bazar\\\",\\\"key\\\":\\\"xWdJ23tCS4\\\"},{\\\"attraction\\\":\\\"Bandarban\\\",\\\"key\\\":\\\"eBBpVh7l06\\\"},{\\\"attraction\\\":\\\"Sylhet\\\",\\\"key\\\":\\\"ptQgoIubdM\\\"}]\"');

-- --------------------------------------------------------

--
-- Table structure for table `package_tour_categories`
--

CREATE TABLE `package_tour_categories` (
  `id` int(11) NOT NULL,
  `categories` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`categories`)),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `package_tour_categories`
--

INSERT INTO `package_tour_categories` (`id`, `categories`, `createdAt`, `updatedAt`) VALUES
(1, '[{\"category\":\"Wild-life\",\"key\":\"AN9a4n\"},{\"category\":\"Historical\",\"key\":\"Mj5IwU\"},{\"category\":\"Adventure\",\"key\":\"FVX4Uz\"},{\"category\":\"Culture\",\"key\":\"414PkK\"},{\"category\":\"City-tour\",\"key\":\"iXtWkf\"},{\"category\":\"Photography\",\"key\":\"LnE8oI\"},{\"category\":\"Beach-Island \",\"key\":\"PG2in9\"},{\"category\":\"Hiking-Trekking \",\"key\":\"3rNTtc\"}]', '2024-10-28 16:07:51', '2024-10-28 16:32:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `CompanyInfos`
--
ALTER TABLE `CompanyInfos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Contacts`
--
ALTER TABLE `Contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Images`
--
ALTER TABLE `Images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `PackagePlaces`
--
ALTER TABLE `PackagePlaces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Packages`
--
ALTER TABLE `Packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `package_tour_categories`
--
ALTER TABLE `package_tour_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `CompanyInfos`
--
ALTER TABLE `CompanyInfos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Contacts`
--
ALTER TABLE `Contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Images`
--
ALTER TABLE `Images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `PackagePlaces`
--
ALTER TABLE `PackagePlaces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `Packages`
--
ALTER TABLE `Packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `package_tour_categories`
--
ALTER TABLE `package_tour_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
