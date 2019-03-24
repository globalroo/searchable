import { MEDIA_TYPE } from "src/tmdb-service/tmdb-api";

export const mockMovieItem = {
	id: 0,
	title: "movieItem",
	media_type: MEDIA_TYPE.MOVIE
};

export const mockTvItem = {
	id: 1,
	title: "tvItem",
	media_type: MEDIA_TYPE.TV
};

export const mockPersonItem = {
	id: 2,
	name: "personItem",
	media_type: MEDIA_TYPE.PERSON
};

export const mockResultsArray = [mockMovieItem, mockTvItem, mockPersonItem];

export const fakePeopleResponse = {
	page: 1,
	results: [
		{
			adult: false,
			gender: 2,
			name: "Tom Cruise",
			id: 500,
			known_for: [
				{
					id: 137113,
					video: false,
					vote_count: 7716,
					vote_average: 7.6,
					title: "Edge of Tomorrow",
					release_date: "2014-05-27",
					original_language: "en",
					original_title: "Edge of Tomorrow",
					genre_ids: [28, 878],
					backdrop_path: "/7mgKeg18Qml5nJQa56RBZO7dIu0.jpg",
					adult: false,
					overview:
						"Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop.",
					poster_path: "/tpoVEYvm6qcXueZrQYJNRLXL88s.jpg",
					popularity: 19.518,
					media_type: "movie"
				},
				{
					adult: false,
					backdrop_path: "/8TE77jL2e4zdERpv8hnBAHUmFRx.jpg",
					genre_ids: [28, 878, 12, 9648],
					id: 75612,
					original_language: "en",
					original_title: "Oblivion",
					overview:
						"Jack Harper is one of the last few drone repairmen stationed on Earth.  Part of a massive operation to extract vital resources after decades of war with a terrifying threat known as the Scavs, Jack’s mission is nearly complete.  His existence is brought crashing down when he rescues a beautiful  stranger from a downed spacecraft.  Her arrival triggers a chain of events that  forces him to question everything he knows and puts the fate of humanity in his hands.",
					poster_path: "/hmOzkHlkGvi8x24fYpFSnXvjklv.jpg",
					release_date: "2013-04-10",
					title: "Oblivion",
					video: false,
					vote_average: 6.5,
					vote_count: 6645,
					media_type: "movie"
				},
				{
					adult: false,
					backdrop_path: "/pc7a2qrIkIxzqWGqcexd3mHzIxy.jpg",
					genre_ids: [28, 53, 12],
					id: 56292,
					original_language: "en",
					original_title: "Mission: Impossible - Ghost Protocol",
					overview:
						"Ethan Hunt and his team are racing against time to track down a dangerous terrorist named Hendricks, who has gained access to Russian nuclear launch codes and is planning a strike on the United States. An attempt to stop him ends in an explosion causing severe destruction to the Kremlin and the IMF to be implicated in the bombing, forcing the President to disavow them. No longer being aided by the government, Ethan and his team chase Hendricks around the globe, although they might still be too late to stop a disaster.",
					poster_path: "/s58mMsgIVOFfoXPtwPWJ3hDYpXf.jpg",
					release_date: "2011-12-07",
					title: "Mission: Impossible - Ghost Protocol",
					video: false,
					vote_average: 6.9,
					vote_count: 5905,
					popularity: 17.303,
					media_type: "movie"
				}
			],
			known_for_department: "Acting",
			profile_path: "/2Dkx4uuGoWFrPSitxdikv9z5azR.jpg",
			popularity: 14.983
		},
		{
			adult: false,
			gender: 2,
			name: "Quentin Tarantino",
			id: 138,
			known_for: [
				{
					adult: false,
					backdrop_path: "/qUcmEqnzIwlwZxSyTf3WliSfAjJ.jpg",
					genre_ids: [18, 37],
					id: 68718,
					original_language: "en",
					original_title: "Django Unchained",
					overview:
						"With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
					poster_path: "/5WJnxuw41sddupf8cwOxYftuvJG.jpg",
					release_date: "2012-12-25",
					title: "Django Unchained",
					video: false,
					vote_average: 8.0,
					vote_count: 15120,
					popularity: 29.141,
					media_type: "movie"
				},
				{
					adult: false,
					backdrop_path: "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
					genre_ids: [53, 80],
					id: 680,
					original_language: "en",
					original_title: "Pulp Fiction",
					overview:
						"A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
					poster_path: "/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
					release_date: "1994-09-10",
					title: "Pulp Fiction",
					video: false,
					vote_average: 8.4,
					vote_count: 14543,
					popularity: 25.172,
					media_type: "movie"
				},
				{
					id: 16869,
					video: false,
					vote_count: 11377,
					vote_average: 8.1,
					title: "Inglourious Basterds",
					release_date: "2009-08-18",
					original_language: "en",
					original_title: "Inglourious Basterds",
					genre_ids: [28, 18, 53, 10752],
					backdrop_path: "/7nF6B9yCEq1ZCT82sGJVtNxOcl5.jpg",
					adult: false,
					overview:
						'In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as "The Basterds" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.',
					poster_path: "/ai0LXkzVM3hMjDhvFdKMUemoBe.jpg",
					popularity: 22.04,
					media_type: "movie"
				}
			],
			known_for_department: "Directing",
			profile_path: "/rivHScdhT043n5jCSci7ToqLsoE.jpg",
			popularity: 9.14
		},
		{
			adult: false,
			gender: 2,
			name: "Brad Pitt",
			id: 287,
			known_for: [
				{
					adult: false,
					backdrop_path: "/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
					genre_ids: [18],
					id: 550,
					original_language: "en",
					original_title: "Fight Club",
					overview:
						'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
					poster_path: "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
					release_date: "1999-10-15",
					title: "Fight Club",
					video: false,
					vote_average: 8.4,
					vote_count: 15667,
					popularity: 29.185,
					media_type: "movie"
				},
				{
					id: 16869,
					video: false,
					vote_count: 11385,
					vote_average: 8.1,
					title: "Inglourious Basterds",
					release_date: "2009-08-18",
					original_language: "en",
					original_title: "Inglourious Basterds",
					genre_ids: [28, 18, 53, 10752],
					backdrop_path: "/7nF6B9yCEq1ZCT82sGJVtNxOcl5.jpg",
					adult: false,
					overview:
						'In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as "The Basterds" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.',
					poster_path: "/ai0LXkzVM3hMjDhvFdKMUemoBe.jpg",
					popularity: 22.76,
					media_type: "movie"
				},
				{
					adult: false,
					backdrop_path: "/A0WKbRIojF9DUWG4XLCmg5JK6I5.jpg",
					genre_ids: [80, 9648, 53],
					id: 807,
					original_language: "en",
					original_title: "Se7en",
					overview:
						'Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer\'s mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.',
					poster_path: "/8zw8IL4zEPjkh8Aysdcd0FwGMb0.jpg",
					release_date: "1995-09-22",
					title: "Se7en",
					video: false,
					vote_average: 8.3,
					vote_count: 10142,
					popularity: 29.462,
					media_type: "movie"
				}
			],
			known_for_department: "Acting",
			profile_path: "/kU3B75TyRiCgE270EyZnHjfivoq.jpg",
			popularity: 16.385
		},
		{
			adult: false,
			gender: 2,
			name: "Leonardo DiCaprio",
			id: 6193,
			known_for: [
				{
					adult: false,
					backdrop_path: "/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg",
					genre_ids: [28, 878, 12],
					id: 27205,
					original_language: "en",
					original_title: "Inception",
					overview:
						"Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
					poster_path: "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
					release_date: "2010-07-15",
					title: "Inception",
					video: false,
					vote_average: 8.3,
					vote_count: 21372,
					popularity: 34.216,
					media_type: "movie"
				},
				{
					adult: false,
					backdrop_path: "/qUcmEqnzIwlwZxSyTf3WliSfAjJ.jpg",
					genre_ids: [18, 37],
					id: 68718,
					original_language: "en",
					original_title: "Django Unchained",
					overview:
						"With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
					poster_path: "/5WJnxuw41sddupf8cwOxYftuvJG.jpg",
					release_date: "2012-12-25",
					title: "Django Unchained",
					video: false,
					vote_average: 8.0,
					vote_count: 15123,
					popularity: 20.027,
					media_type: "movie"
				},
				{
					adult: false,
					backdrop_path: "/vFUI5obFtx4IdhP6k8Om5ezHTrk.jpg",
					genre_ids: [18, 10749, 53],
					id: 597,
					original_language: "en",
					original_title: "Titanic",
					overview:
						"101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. On April 10, 1912, a young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-classic tickets. Rose tells the whole story from departure through the death of Titanic on its first and last voyage, on April 15, 1912.",
					poster_path: "/kHXEpyfl6zqn8a6YuozZUujufXf.jpg",
					release_date: "1997-11-18",
					title: "Titanic",
					video: false,
					vote_average: 7.8,
					vote_count: 13594,
					popularity: 23.946,
					media_type: "movie"
				}
			],
			known_for_department: "Acting",
			profile_path: "/jqbqNrOIB3alGMX6Gh2MbOKMXZO.jpg",
			popularity: 14.851
		},
		{
			adult: false,
			gender: 2,
			name: "Jackie Chan",
			id: 18897,
			known_for: [
				{
					adult: false,
					backdrop_path: "/pmLEmMLYCreFAxfdCt5uO1wDgSi.jpg",
					genre_ids: [12, 16, 10751, 35],
					id: 9502,
					original_language: "en",
					original_title: "Kung Fu Panda",
					overview:
						"When the Valley of Peace is threatened, lazy Po the panda discovers his destiny as the \"chosen one\" and trains to become a kung fu hero, but transforming the unsleek slacker into a brave warrior won't be easy. It's up to Master Shifu and the Furious Five -- Tigress, Crane, Mantis, Viper and Monkey -- to give it a try.",
					poster_path: "/2Paj1nufT0jeSY0G4u3RC31HIGT.jpg",
					release_date: "2008-06-04",
					title: "Kung Fu Panda",
					video: false,
					vote_average: 7.0,
					vote_count: 5814,
					popularity: 16.216,
					media_type: "movie"
				},
				{
					adult: false,
					backdrop_path: "/eyiE1vuizMKVu8MoZkg2xsramFl.jpg",
					genre_ids: [16, 10751],
					id: 49444,
					original_language: "en",
					original_title: "Kung Fu Panda 2",
					overview:
						"Po is now living his dream as The Dragon Warrior, protecting the Valley of Peace alongside his friends and fellow kung fu masters, The Furious Five - Tigress, Crane, Mantis, Viper and Monkey. But Po’s new life of awesomeness is threatened by the emergence of a formidable villain, who plans to use a secret, unstoppable weapon to conquer China and destroy kung fu. It is up to Po and The Furious Five to journey across China to face this threat and vanquish it. But how can Po stop a weapon that can stop kung fu? He must look to his past and uncover the secrets of his mysterious origins; only then will he be able to unlock the strength he needs to succeed.",
					poster_path: "/Fzyy2dauoKxjUzUPYYo3kJkJAW.jpg",
					release_date: "2011-05-25",
					title: "Kung Fu Panda 2",
					video: false,
					vote_average: 6.7,
					vote_count: 3447,
					popularity: 14.504,
					media_type: "movie"
				},
				{
					adult: false,
					backdrop_path: "/rfhnEYubWD4hnUUm8xXmotpqffb.jpg",
					genre_ids: [28, 12, 18, 10751],
					id: 38575,
					original_language: "en",
					original_title: "The Karate Kid",
					overview:
						"12-year-old Dre Parker could have been the most popular kid in Detroit, but his mother's latest career move has landed him in China. Dre immediately falls for his classmate Mei Ying but the cultural differences make such a friendship impossible. Even worse, Dre's feelings make him an enemy of the class bully, Cheng. With no friends in a strange land, Dre has nowhere to turn but maintenance man Mr. Han, who is a kung fu master. As Han teaches Dre that kung fu is not about punches and parries, but maturity and calm, Dre realizes that facing down the bullies will be the fight of his life.",
					poster_path: "/bucxUHJd1DFy15iHzuXSOoFrObW.jpg",
					release_date: "2010-06-10",
					title: "The Karate Kid",
					video: false,
					vote_average: 6.3,
					vote_count: 2996,
					media_type: "movie"
				}
			],
			known_for_department: "Acting",
			profile_path: "/pmKJ4sGvPQ3imzXaFnjW4Vk5Gyc.jpg",
			popularity: 18.136
		},
		{
			adult: false,
			gender: 2,
			name: "Bruce Willis",
			id: 62,
			known_for: [
				{
					adult: false,
					backdrop_path: "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
					genre_ids: [53, 80],
					id: 680,
					original_language: "en",
					original_title: "Pulp Fiction",
					overview:
						"A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
					poster_path: "/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
					release_date: "1994-09-10",
					title: "Pulp Fiction",
					video: false,
					vote_average: 8.4,
					vote_count: 14564,
					popularity: 30.195,
					media_type: "movie"
				},
				{
					adult: false,
					backdrop_path: "/9pkZesKMnblFfKxEhQx45YQ2kIe.jpg",
					genre_ids: [27, 53],
					id: 381288,
					original_language: "en",
					original_title: "Split",
					overview:
						"Though Kevin has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher, there remains one still submerged who is set to materialize and dominate all the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him — as well as everyone around him — as the walls between his compartments shatter apart.",
					poster_path: "/rXMWOZiCt6eMX22jWuTOSdQ98bY.jpg",
					release_date: "2017-01-19",
					title: "Split",
					video: false,
					vote_average: 7.2,
					vote_count: 9777,
					popularity: 29.333,
					media_type: "movie"
				},
				{
					adult: false,
					backdrop_path: "/vuHG8VlYnvw4gUKtS7GY5kZol69.jpg",
					genre_ids: [28, 53, 878],
					id: 59967,
					original_language: "en",
					original_title: "Looper",
					overview:
						"In the futuristic action thriller Looper, time travel will be invented but it will be illegal and only available on the black market. When the mob wants to get rid of someone, they will send their target 30 years into the past where a looper, a hired gun, like Joe is waiting to mop up. Joe is getting rich and life is good until the day the mob decides to close the loop, sending back Joe's future self for assassination.",
					poster_path: "/sNjL6SqErDBE8OUZlrDLkexfsCj.jpg",
					release_date: "2012-09-26",
					title: "Looper",
					video: false,
					vote_average: 6.8,
					vote_count: 6530,
					popularity: 13.524,
					media_type: "movie"
				}
			],
			known_for_department: "Acting",
			profile_path: "/zoTPQXh3qLd0Nj8JCVZqdWowQw7.jpg",
			popularity: 12.242
		},
		{
			adult: false,
			gender: 1,
			name: "Scarlett Johansson",
			id: 1245,
			known_for: [
				{
					id: 24428,
					video: false,
					vote_count: 18514,
					vote_average: 7.6,
					title: "The Avengers",
					release_date: "2012-04-25",
					original_language: "en",
					original_title: "The Avengers",
					genre_ids: [28, 12, 878],
					backdrop_path: "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
					adult: false,
					overview:
						"When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
					poster_path: "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
					popularity: 66.207,
					media_type: "movie"
				},
				{
					id: 271110,
					video: false,
					vote_count: 13162,
					vote_average: 7.3,
					title: "Captain America: Civil War",
					release_date: "2016-04-27",
					original_language: "en",
					original_title: "Captain America: Civil War",
					genre_ids: [28, 12, 878],
					backdrop_path: "/m5O3SZvQ6EgD5XXXLPIP1wLppeW.jpg",
					adult: false,
					overview:
						"Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
					poster_path: "/kSBXou5Ac7vEqKd97wotJumyJvU.jpg",
					popularity: 38.732,
					media_type: "movie"
				},
				{
					id: 99861,
					video: false,
					vote_count: 12488,
					vote_average: 7.3,
					title: "Avengers: Age of Ultron",
					release_date: "2015-04-22",
					original_language: "en",
					original_title: "Avengers: Age of Ultron",
					genre_ids: [28, 12, 878],
					backdrop_path: "/rFtsE7Lhlc2jRWF7SRAU0fvrveQ.jpg",
					adult: false,
					overview:
						"When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
					poster_path: "/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
					popularity: 55.953,
					media_type: "movie"
				}
			],
			known_for_department: "Acting",
			profile_path: "/tHMgW7Pg0Fg6HmB8Kh8Ixk6yxZw.jpg",
			popularity: 23.809
		}
	],
	total_pages: 1000,
	total_results: 20000
};
