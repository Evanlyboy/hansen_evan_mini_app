-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 22, 2021 at 09:42 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_miniApp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cars`
--

CREATE TABLE `tbl_cars` (
  `ID` int(11) NOT NULL,
  `car` varchar(30) NOT NULL,
  `car_complete` varchar(40) NOT NULL,
  `price` varchar(8) NOT NULL,
  `lease_rate` varchar(6) NOT NULL,
  `finance_rate` varchar(6) NOT NULL,
  `lease_monthly` varchar(6) NOT NULL,
  `finance_monthly` varchar(6) NOT NULL,
  `image` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_cars`
--

INSERT INTO `tbl_cars` (`ID`, `car`, `car_complete`, `price`, `lease_rate`, `finance_rate`, `lease_monthly`, `finance_monthly`, `image`) VALUES
(1, 'Cooper', '2022 Mini Cooper 3 door', '$27,456', '3.99', '2.99', '$385', '$492', 'cooper.png'),
(2, 'Cooper S', '2022 Mini Cooper S 3 Door', '$31,756', '3.99', '2.99', '$444', '$571', 'cooper_s.png'),
(3, 'John Cooper Works', '2022 Mini John Cooper Works 3 door', '$38,906', '3.99', '2.99', '$542', '$703', 'cooper_john.png'),
(4, 'Cooper SE 3 Door', '2022 Mini Cooper SE 3 Door', '$38,956', '4.99', '2.99', '$499', '$796', 'cooper_se.png');

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
