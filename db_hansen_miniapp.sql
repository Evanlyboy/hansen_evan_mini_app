-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 08, 2022 at 01:26 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_hansen_miniapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cars`
--

CREATE TABLE `tbl_cars` (
  `ID` int(11) NOT NULL,
  `car` varchar(50) NOT NULL,
  `car_complete` varchar(50) NOT NULL,
  `price` varchar(10) NOT NULL,
  `finance_rate` float UNSIGNED NOT NULL,
  `finance_pay` smallint(8) UNSIGNED NOT NULL,
  `lease_rate` float UNSIGNED NOT NULL,
  `lease_pay` smallint(8) UNSIGNED NOT NULL,
  `image` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_cars`
--

INSERT INTO `tbl_cars` (`ID`, `car`, `car_complete`, `price`, `finance_rate`, `finance_pay`, `lease_rate`, `lease_pay`, `image`) VALUES
(1, 'cooper_3', '2023 Mini Cooper 3 Door', '31 090', 6.25, 458, 5.99, 730, 'mini3.png'),
(2, 'cooper_5', '2023 Mini Cooper 5 Door', '32 190', 6.25, 474, 5.99, 756, 'mini5.png'),
(3, 'cooper_convertible', '2023 Mini Cooper Convertible', '37 990', 6.25, 560, 5.99, 892, 'miniConvert.png'),
(4, 'all_electric_cooper_3_door', '2023 Mini Cooper All-Electric 3 Door', '45 590', 6.25, 671, 5.99, 1070, 'miniElectric.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_cars`
--
ALTER TABLE `tbl_cars`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_cars`
--
ALTER TABLE `tbl_cars`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
