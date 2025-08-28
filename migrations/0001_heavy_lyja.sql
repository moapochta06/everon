CREATE TABLE `lead_sources` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `lead_sources_id` PRIMARY KEY(`id`),
	CONSTRAINT `lead_sources_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`message` text,
	`source_id` int NOT NULL,
	`name` varchar(100),
	`phone` varchar(20) NOT NULL,
	`email` varchar(100) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `leads_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `leads` ADD CONSTRAINT `leads_source_id_lead_sources_id_fk` FOREIGN KEY (`source_id`) REFERENCES `lead_sources`(`id`) ON DELETE no action ON UPDATE no action;