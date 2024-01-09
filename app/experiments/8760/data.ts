const data: number[] = [
  0, 0, 0, 0, 0, 0, 0, 40, 253, 413, 529, 586, 583, 513, 385, 215, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73,
  255, 419, 537, 596, 590, 519, 387, 218, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 259, 425, 427, 613, 607,
  535, 405, 230, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 105, 310, 546, 607, 602, 531, 402, 229, 47, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 252, 418, 537, 598, 593, 523, 396, 225, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 42, 232, 422, 542, 489, 469, 529, 401, 229, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 253, 419, 535,
  596, 592, 520, 395, 226, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 257, 424, 546, 608, 604, 535, 407, 236, 54,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 255, 422, 543, 605, 602, 531, 406, 236, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 40, 189, 341, 376, 423, 498, 350, 143, 183, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 174, 257,
  531, 594, 592, 524, 377, 236, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 254, 424, 548, 612, 606, 540, 412,
  244, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 255, 423, 546, 610, 609, 542, 417, 245, 63, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 75, 262, 433, 558, 623, 623, 551, 426, 212, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43,
  169, 415, 448, 479, 586, 402, 349, 111, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 248, 415, 541, 606, 606,
  539, 416, 232, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 151, 415, 536, 600, 466, 465, 417, 253, 73, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 161, 420, 505, 527, 351, 528, 253, 190, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 66, 217, 208, 409, 290, 607, 545, 342, 259, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 251, 423, 550,
  616, 618, 424, 98, 121, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 176, 398, 410, 631, 633, 569, 427, 276, 86,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 269, 440, 567, 635, 637, 571, 448, 278, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 79, 264, 431, 555, 547, 358, 412, 292, 225, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 135, 266,
  338, 405, 363, 296, 159, 100, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 42, 57, 75, 163, 17, 273, 451, 282,
  94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 266, 235, 33, 26, 439, 546, 423, 267, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 85, 282, 467, 600, 672, 192, 611, 484, 308, 111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 300,
  482, 616, 688, 686, 622, 494, 318, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 303, 486, 621, 694, 692, 627,
  420, 258, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 148, 425, 579, 470, 392, 323, 456, 263, 97, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 35, 38, 29, 473, 678, 616, 492, 317, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90,
  285, 471, 606, 679, 683, 621, 495, 320, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 312, 496, 631, 630, 701,
  635, 510, 340, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 316, 498, 632, 704, 709, 640, 514, 338, 137, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 307, 486, 619, 691, 696, 630, 506, 334, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 75, 169, 358, 516, 684, 681, 586, 467, 232, 77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 317, 498, 633,
  706, 710, 646, 520, 315, 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 59, 356, 269, 415, 429, 581, 183, 201, 41,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 244, 345, 437, 471, 561, 513, 440, 234, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 104, 280, 334, 524, 509, 503, 381, 459, 191, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 58,
  263, 336, 496, 664, 629, 508, 337, 146, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 119, 150, 498, 630, 450, 718, 658,
  533, 306, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 328, 510, 648, 718, 723, 662, 533, 357, 159, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 334, 517, 651, 441, 353, 363, 539, 363, 159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 139, 351, 538, 680, 754, 760, 702, 573, 391, 179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 356, 537, 671,
  741, 745, 682, 553, 376, 172, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 355, 538, 670, 743, 747, 684, 557, 379,
  173, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 355, 538, 675, 748, 750, 687, 560, 345, 129, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 42, 121, 210, 311, 325, 298, 372, 350, 286, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 46,
  138, 203, 235, 233, 346, 247, 313, 145, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 167, 380, 566, 702, 771, 775, 706,
  577, 398, 190, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 163, 374, 560, 695, 769, 774, 712, 584, 405, 196, 15, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 164, 370, 253, 211, 112, 630, 609, 170, 200, 68, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 181, 400, 356, 723, 351, 389, 370, 612, 429, 213, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 187, 402, 589, 726,
  799, 809, 743, 613, 430, 215, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 183, 392, 577, 714, 788, 792, 729, 598, 417,
  206, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 184, 398, 583, 717, 790, 794, 728, 599, 422, 211, 23, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 3, 51, 406, 599, 738, 816, 820, 756, 625, 440, 222, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  206, 426, 616, 749, 824, 828, 761, 630, 450, 61, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 210, 430, 619, 756, 830,
  834, 766, 631, 448, 233, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 214, 428, 614, 744, 813, 814, 743, 609, 426, 69,
  31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 106, 369, 296, 614, 612, 618, 148, 296, 259, 109, 14, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 6, 89, 399, 533, 748, 700, 816, 643, 352, 214, 145, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 117, 29,
  77, 269, 504, 822, 552, 69, 95, 9, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 88, 178, 521, 687, 692, 846, 777, 450,
  361, 244, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 216, 453, 640, 759, 714, 670, 25, 495, 311, 58, 23, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 10, 190, 368, 239, 253, 411, 573, 25, 607, 460, 249, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  41, 153, 358, 29, 615, 722, 714, 672, 650, 382, 222, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 256, 476, 664, 798,
  865, 865, 797, 666, 480, 261, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 263, 484, 668, 804, 874, 873, 803, 665, 478,
  259, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 261, 479, 662, 794, 858, 857, 789, 561, 414, 256, 40, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 51, 261, 476, 661, 799, 866, 866, 795, 664, 478, 260, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58,
  264, 480, 666, 798, 866, 865, 793, 659, 474, 260, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 274, 491, 675, 805, 874,
  873, 800, 667, 483, 266, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 281, 499, 683, 812, 880, 878, 810, 676, 463, 111,
  41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 77, 293, 521, 719, 853, 925, 925, 843, 705, 514, 282, 47, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 78, 298, 517, 703, 838, 907, 901, 827, 689, 502, 283, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 299,
  514, 696, 823, 784, 753, 643, 675, 489, 244, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 91, 240, 745, 882, 952, 937,
  860, 720, 527, 300, 77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 94, 316, 537, 725, 857, 923, 919, 842, 702, 510, 286, 71,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 323, 547, 735, 868, 930, 927, 853, 710, 520, 297, 60, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 68, 285, 394, 577, 703, 725, 898, 826, 687, 501, 285, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 249,
  505, 596, 837, 895, 737, 733, 591, 501, 286, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 327, 544, 723, 854, 917,
  908, 809, 472, 436, 289, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 335, 555, 738, 867, 932, 927, 849, 711, 523,
  301, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 26, 400, 477, 649, 650, 752, 638, 586, 265, 195, 57, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 115, 339, 559, 745, 874, 938, 933, 857, 718, 528, 302, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117,
  338, 557, 736, 648, 614, 732, 842, 705, 517, 299, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118, 336, 555, 739, 865,
  930, 923, 853, 718, 532, 317, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 379, 605, 791, 920, 974, 967, 889, 740,
  546, 316, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 373, 595, 774, 896, 859, 807, 743, 657, 475, 250, 76, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 364, 583, 766, 895, 960, 954, 871, 518, 542, 320, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 17, 219, 598, 779, 906, 969, 961, 878, 737, 547, 322, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 146, 373, 408, 772,
  897, 958, 955, 874, 730, 540, 295, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 159, 393, 614, 795, 923, 985, 974, 896,
  749, 555, 331, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 380, 497, 550, 729, 834, 936, 871, 645, 546, 325, 106, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 388, 605, 785, 911, 973, 964, 887, 747, 557, 336, 114, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 175, 411, 631, 808, 932, 994, 985, 905, 764, 572, 349, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 407,
  626, 806, 926, 987, 977, 894, 753, 561, 339, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 177, 403, 620, 796, 920, 981,
  971, 880, 738, 546, 325, 109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 404, 618, 792, 884, 841, 777, 773, 728, 542,
  327, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 177, 396, 606, 785, 915, 971, 961, 884, 743, 553, 335, 117, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 12, 183, 405, 421, 466, 349, 431, 911, 782, 593, 419, 210, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  14, 12, 215, 612, 789, 612, 283, 133, 86, 130, 83, 63, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 190, 416, 632, 808,
  935, 996, 985, 902, 763, 573, 350, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 201, 433, 649, 827, 950, 1008, 992, 913,
  771, 576, 351, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 113, 421, 634, 736, 841, 977, 968, 894, 754, 565, 347, 128, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 204, 436, 648, 822, 943, 1000, 991, 910, 769, 579, 358, 136, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 26, 218, 448, 661, 837, 958, 1015, 1003, 923, 783, 592, 370, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 215,
  438, 552, 771, 885, 889, 773, 785, 633, 488, 252, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 140, 373, 584, 659, 865,
  708, 870, 735, 644, 380, 267, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 231, 464, 675, 845, 958, 972, 794, 765, 773,
  583, 363, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 226, 455, 666, 839, 955, 1009, 992, 911, 770, 581, 362, 142, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 220, 446, 551, 821, 941, 999, 987, 905, 764, 578, 362, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 37, 227, 285, 661, 828, 946, 1001, 988, 910, 772, 588, 372, 151, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 243, 474,
  682, 854, 971, 1025, 1012, 928, 790, 600, 381, 159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 243, 470, 680, 848, 966,
  1015, 995, 913, 767, 572, 355, 141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 242, 466, 675, 842, 960, 1013, 999, 921, 784,
  598, 385, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 253, 486, 698, 868, 986, 1036, 1023, 941, 797, 610, 388, 165, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 258, 490, 701, 871, 983, 1036, 1020, 940, 796, 608, 272, 129, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 54, 253, 478, 686, 850, 964, 1013, 1000, 918, 775, 527, 312, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56,
  252, 474, 678, 845, 960, 1012, 995, 913, 775, 591, 378, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 257, 481, 683, 849,
  967, 1019, 1002, 926, 783, 594, 380, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 263, 484, 686, 759, 904, 898, 792, 580,
  490, 532, 359, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 249, 292, 200, 708, 564, 284, 574, 782, 753, 154, 186, 127,
  3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 267, 484, 687, 854, 962, 852, 1001, 918, 781, 601, 388, 171, 12, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 69, 271, 492, 694, 859, 970, 1019, 1005, 919, 782, 596, 382, 168, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
  266, 486, 686, 851, 965, 1017, 1002, 916, 778, 312, 381, 169, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 264, 477, 277,
  287, 513, 706, 586, 929, 801, 620, 411, 190, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 295, 522, 729, 897, 1004, 1055,
  1041, 963, 821, 635, 421, 196, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 290, 515, 720, 886, 999, 1050, 1035, 954, 812,
  624, 410, 189, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 289, 513, 715, 882, 997, 1044, 1029, 948, 810, 579, 410, 190, 19,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 286, 504, 704, 865, 936, 970, 805, 792, 747, 573, 333, 161, 16, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 79, 276, 495, 694, 855, 962, 1014, 997, 916, 777, 598, 391, 180, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 283,
  500, 700, 860, 972, 1022, 1005, 925, 789, 611, 406, 193, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 274, 481, 529, 632,
  942, 923, 938, 890, 773, 601, 397, 145, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 265, 504, 654, 879, 979, 978, 895, 855,
  724, 604, 314, 191, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 295, 512, 714, 873, 982, 1032, 1016, 938, 804, 625, 417,
  203, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 305, 524, 726, 888, 995, 1045, 1029, 951, 814, 635, 424, 209, 29, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 101, 309, 527, 727, 888, 994, 1044, 1026, 948, 815, 636, 428, 211, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 106, 318, 540, 743, 907, 1018, 1065, 1050, 973, 834, 652, 439, 218, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 320,
  541, 743, 906, 1012, 1063, 1045, 965, 827, 647, 436, 215, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 317, 535, 734, 896,
  1003, 1053, 1035, 955, 818, 639, 430, 214, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 109, 319, 540, 740, 900, 1005, 1051,
  1033, 955, 821, 641, 432, 215, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 109, 318, 538, 739, 902, 1008, 1057, 1039, 962, 825,
  646, 435, 219, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 308, 525, 722, 882, 992, 1046, 1035, 962, 829, 647, 438, 222, 39,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 313, 529, 727, 887, 993, 1042, 1024, 941, 806, 628, 421, 211, 37, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 103, 303, 520, 717, 876, 986, 1036, 1023, 941, 809, 633, 426, 214, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104,
  306, 526, 726, 887, 992, 1038, 1022, 947, 819, 643, 439, 224, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 110, 316, 533, 734,
  896, 1003, 1053, 1040, 960, 828, 650, 442, 224, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 109, 312, 530, 726, 886, 996, 1043,
  1028, 948, 817, 639, 444, 228, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 111, 258, 532, 728, 889, 994, 1045, 1032, 957, 825,
  650, 445, 231, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 319, 536, 733, 893, 1001, 1052, 1039, 965, 837, 660, 455, 238,
  50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 314, 526, 721, 877, 985, 1037, 1030, 961, 835, 661, 400, 238, 36, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 65, 262, 392, 561, 743, 901, 922, 912, 834, 733, 670, 459, 243, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  119, 329, 547, 747, 910, 1020, 1067, 1056, 982, 851, 674, 464, 247, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 327, 543,
  740, 902, 1010, 1061, 1053, 978, 851, 675, 467, 250, 57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 329, 545, 747, 907, 1017,
  1068, 1055, 981, 851, 673, 465, 248, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 119, 330, 548, 742, 903, 1012, 1063, 1051, 977,
  845, 669, 461, 245, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 330, 548, 748, 911, 1023, 1070, 1059, 981, 851, 675, 465,
  248, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 334, 553, 753, 915, 1025, 1077, 1061, 988, 854, 679, 469, 252, 60, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 132, 348, 571, 774, 938, 1041, 1094, 1084, 1010, 878, 699, 484, 263, 64, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 124, 335, 554, 749, 911, 1018, 1070, 1060, 986, 856, 680, 473, 254, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116,
  324, 541, 736, 899, 1007, 1060, 1046, 970, 838, 662, 457, 243, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 119, 326, 541, 737,
  898, 1004, 1057, 1042, 970, 842, 670, 465, 253, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118, 322, 534, 728, 887, 989, 1042,
  1030, 960, 834, 665, 463, 253, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 315, 527, 722, 866, 859, 937, 845, 858, 832,
  660, 458, 246, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 208, 526, 721, 880, 993, 1046, 1037, 972, 849, 679, 478, 264,
  69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 333, 551, 749, 917, 1028, 1083, 1074, 1003, 875, 699, 492, 269, 71, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 121, 329, 546, 744, 906, 1016, 1071, 1057, 986, 855, 681, 474, 260, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 118, 324, 537, 734, 895, 1005, 1055, 1047, 976, 848, 677, 472, 258, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 314,
  525, 717, 876, 986, 1040, 1031, 961, 803, 631, 463, 253, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 111, 310, 521, 715, 875,
  989, 1043, 1037, 966, 829, 669, 470, 259, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116, 320, 536, 734, 894, 1001, 1055, 1047,
  981, 854, 681, 479, 264, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 317, 535, 735, 895, 999, 1054, 1043, 963, 835, 659,
  456, 245, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 94, 285, 492, 685, 842, 960, 1009, 1000, 954, 819, 642, 438, 230, 53, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 94, 288, 500, 696, 860, 959, 1017, 1012, 951, 822, 651, 448, 238, 57, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 98, 296, 510, 710, 875, 989, 1045, 1038, 972, 847, 676, 474, 260, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 111, 315,
  528, 722, 881, 988, 1038, 1031, 960, 837, 667, 469, 259, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 306, 517, 713, 873,
  980, 1034, 1027, 961, 838, 670, 473, 262, 71, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 302, 515, 711, 872, 982, 1038, 1032,
  967, 844, 676, 465, 256, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 291, 500, 693, 852, 961, 1015, 1006, 941, 743, 384,
  454, 246, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 283, 486, 675, 831, 935, 986, 922, 774, 335, 621, 433, 234, 60, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 56, 286, 487, 675, 831, 931, 982, 369, 743, 177, 418, 97, 52, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 3, 156, 299, 555, 725, 918, 974, 926, 719, 425, 501, 204, 209, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 281, 485, 582,
  682, 147, 641, 798, 771, 657, 81, 305, 167, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 53, 386, 377, 381, 651, 456, 493,
  557, 241, 157, 190, 168, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 272, 298, 663, 822, 201, 876, 919, 651, 282, 531, 424,
  225, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 279, 486, 678, 838, 951, 1003, 995, 927, 804, 638, 291, 204, 61, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 85, 274, 481, 673, 833, 946, 1002, 761, 937, 813, 645, 451, 245, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 87, 279, 486, 683, 844, 958, 1018, 1013, 949, 826, 660, 465, 256, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 297, 516,
  717, 882, 997, 1055, 1051, 983, 859, 687, 485, 267, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 95, 302, 525, 729, 897, 1015,
  1074, 1069, 1001, 870, 695, 488, 270, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 304, 525, 725, 893, 1005, 1055, 1046, 972,
  845, 674, 468, 255, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 291, 507, 706, 874, 991, 1049, 1045, 977, 855, 683, 479,
  260, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 84, 287, 506, 706, 872, 986, 1043, 1037, 967, 846, 674, 473, 256, 61, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 81, 280, 501, 703, 871, 990, 1049, 1045, 978, 853, 681, 476, 258, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 83, 282, 497, 698, 860, 977, 1036, 1031, 964, 839, 668, 466, 251, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 280, 495,
  695, 860, 977, 1035, 1035, 968, 843, 671, 468, 252, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 282, 502, 704, 872, 994,
  1053, 1049, 981, 856, 682, 475, 256, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 285, 504, 708, 876, 990, 1049, 1042, 974,
  849, 679, 473, 256, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 288, 509, 714, 883, 1003, 1062, 1053, 985, 858, 683, 476,
  255, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 278, 498, 704, 873, 989, 1048, 1044, 976, 846, 673, 469, 250, 56, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 77, 283, 504, 710, 880, 995, 1055, 1046, 975, 844, 666, 463, 243, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 69, 268, 483, 686, 854, 971, 1030, 1022, 951, 825, 649, 448, 233, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 259, 475,
  679, 847, 968, 1028, 1024, 961, 836, 662, 456, 238, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 254, 468, 669, 836, 954,
  1014, 1010, 943, 819, 647, 443, 229, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 255, 470, 672, 839, 957, 1020, 1016, 947,
  821, 647, 441, 226, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 253, 469, 672, 840, 960, 1020, 1013, 946, 820, 647, 442,
  227, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 251, 467, 670, 836, 955, 1015, 1012, 946, 820, 646, 441, 225, 41, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 61, 264, 487, 691, 861, 977, 1034, 1030, 957, 829, 654, 447, 228, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 53, 243, 460, 662, 829, 946, 1005, 1001, 933, 808, 635, 382, 203, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 237, 447,
  647, 813, 933, 995, 990, 883, 778, 629, 426, 214, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 234, 448, 650, 817, 934, 992,
  986, 921, 798, 627, 425, 212, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 237, 450, 649, 815, 933, 992, 985, 914, 786, 612,
  407, 199, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 229, 440, 639, 805, 919, 975, 969, 904, 742, 607, 404, 197, 27, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 31, 177, 403, 188, 785, 804, 954, 890, 843, 720, 568, 385, 184, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 38, 210, 411, 606, 766, 887, 939, 735, 812, 52, 31, 30, 30, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 202, 402, 594,
  757, 890, 955, 954, 398, 442, 594, 391, 154, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 215, 423, 386, 731, 737, 855, 908,
  842, 718, 407, 376, 175, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 207, 414, 608, 769, 878, 932, 926, 878, 754, 586, 385,
  180, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 212, 420, 618, 783, 904, 962, 957, 886, 760, 590, 388, 181, 18, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 37, 221, 437, 640, 808, 926, 986, 980, 911, 782, 608, 401, 187, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  38, 228, 447, 652, 823, 942, 1001, 995, 923, 793, 614, 404, 187, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 225, 444, 650,
  820, 937, 997, 990, 919, 790, 612, 400, 184, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 212, 425, 626, 791, 906, 958, 948,
  883, 754, 579, 376, 46, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 215, 434, 639, 809, 926, 983, 976, 901, 771, 593, 385,
  170, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 210, 429, 638, 809, 934, 994, 988, 914, 783, 604, 394, 175, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 31, 221, 444, 653, 826, 944, 1003, 997, 920, 788, 607, 394, 173, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  30, 224, 449, 656, 829, 947, 1003, 993, 920, 788, 607, 395, 173, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 224, 451, 660,
  834, 956, 1016, 1009, 934, 797, 613, 397, 173, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 215, 438, 646, 817, 937, 996, 989,
  915, 782, 603, 388, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 218, 443, 650, 822, 942, 997, 989, 915, 781, 599, 384,
  162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 214, 439, 649, 822, 939, 997, 989, 914, 779, 599, 384, 161, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 23, 213, 441, 653, 824, 945, 1000, 988, 913, 778, 594, 379, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  21, 205, 425, 628, 795, 911, 969, 958, 883, 701, 571, 359, 145, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 194, 407, 608,
  774, 860, 944, 784, 329, 590, 431, 222, 134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 192, 406, 608, 774, 890, 946, 936,
  828, 180, 553, 345, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 196, 413, 620, 789, 906, 963, 955, 880, 746, 563, 350,
  134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 201, 424, 633, 805, 924, 982, 968, 892, 752, 567, 350, 130, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 15, 194, 416, 624, 795, 915, 974, 964, 887, 750, 565, 349, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14,
  199, 424, 636, 809, 929, 986, 975, 892, 753, 564, 345, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 198, 424, 637, 812,
  933, 991, 980, 900, 756, 567, 263, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 166, 376, 580, 752, 875, 934, 923, 848,
  714, 531, 319, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 180, 404, 614, 783, 897, 949, 936, 859, 719, 534, 321, 108,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 184, 408, 619, 793, 912, 968, 958, 877, 736, 549, 329, 110, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 11, 186, 411, 623, 793, 911, 964, 950, 872, 729, 539, 320, 103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 174,
  392, 597, 765, 879, 933, 919, 840, 702, 516, 303, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 165, 380, 585, 753, 870,
  923, 910, 829, 690, 506, 292, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 160, 374, 577, 743, 856, 908, 894, 814, 674,
  490, 280, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 152, 362, 563, 730, 844, 897, 883, 805, 664, 277, 219, 73, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 6, 154, 364, 563, 726, 838, 833, 798, 788, 653, 463, 253, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  5, 147, 356, 557, 724, 729, 447, 477, 410, 420, 451, 275, 73, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 160, 375, 578, 742,
  854, 904, 891, 813, 675, 490, 279, 73, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 168, 392, 600, 768, 884, 933, 914, 829,
  685, 495, 277, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 162, 385, 595, 765, 877, 929, 913, 830, 686, 495, 277, 67, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 162, 387, 598, 765, 880, 932, 915, 831, 686, 492, 271, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 2, 147, 369, 580, 754, 873, 926, 909, 824, 679, 486, 267, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 152, 378, 592,
  766, 883, 934, 916, 829, 681, 483, 260, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 146, 360, 561, 727, 840, 891, 875,
  789, 645, 455, 241, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 145, 369, 579, 749, 864, 916, 899, 812, 665, 470, 248, 44,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 139, 365, 571, 738, 850, 898, 876, 786, 641, 449, 230, 36, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 120, 337, 546, 712, 823, 875, 862, 779, 634, 443, 228, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 137, 357,
  566, 736, 851, 901, 881, 791, 644, 450, 229, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 350, 554, 720, 831, 878,
  855, 601, 613, 404, 209, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 319, 513, 656, 739, 781, 775, 710, 568, 383,
  181, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 95, 287, 477, 642, 758, 810, 799, 723, 429, 40, 55, 18, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 86, 244, 476, 646, 766, 810, 778, 704, 564, 381, 183, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90,
  281, 476, 650, 776, 821, 801, 714, 568, 381, 176, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 287, 482, 641, 744, 791,
  766, 678, 532, 348, 148, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 337, 545, 712, 821, 863, 838, 741, 542, 351, 115,
  14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 111, 321, 527, 694, 807, 857, 835, 744, 598, 404, 190, 13, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 124, 347, 558, 727, 840, 886, 862, 771, 618, 418, 193, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122,
  347, 559, 729, 843, 889, 865, 771, 617, 415, 190, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 329, 531, 606, 657, 679,
  824, 731, 581, 386, 168, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 317, 519, 679, 784, 812, 776, 697, 543, 353, 148,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 303, 511, 669, 768, 780, 730, 631, 485, 315, 139, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 101, 318, 529, 697, 809, 854, 829, 736, 582, 383, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 319,
  531, 699, 808, 850, 822, 727, 570, 369, 152, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 293, 498, 666, 779, 823, 798,
  709, 509, 307, 145, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 94, 306, 514, 679, 789, 833, 807, 712, 557, 360, 145, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 95, 307, 511, 675, 786, 828, 801, 706, 552, 353, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 92, 305, 511, 681, 790, 833, 805, 710, 555, 355, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 300, 504,
  665, 772, 811, 783, 690, 537, 340, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 287, 392, 388, 628, 337, 341, 388,
  145, 212, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 153, 71, 519, 520, 475, 503, 413, 238, 151, 29, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 267, 458, 614, 553, 270, 626, 475, 492, 307, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 75, 276, 473, 634, 738, 781, 753, 661, 510, 317, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 77, 282, 483, 645,
  749, 790, 761, 668, 515, 321, 111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 280, 480, 642, 747, 787, 758, 663, 510,
  315, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 267, 464, 623, 727, 685, 716, 642, 491, 299, 97, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 63, 260, 457, 618, 724, 764, 735, 643, 490, 298, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  65, 270, 471, 632, 736, 775, 745, 651, 497, 302, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 263, 462, 622, 725,
  764, 734, 641, 490, 242, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 261, 458, 617, 720, 759, 730, 635, 483, 289,
  86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 253, 449, 606, 710, 746, 715, 622, 470, 278, 80, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 32, 249, 443, 601, 704, 743, 713, 619, 466, 221, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 251,
  447, 605, 711, 750, 723, 631, 481, 285, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 253, 448, 607, 704, 743, 710,
  616, 407, 274, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 187, 342, 526, 451, 416, 467, 401, 235, 92, 30, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 246, 446, 607, 712, 759, 728, 629, 473, 274, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 25, 241, 438, 598, 694, 732, 699, 603, 452, 258, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 228, 420, 576, 677,
  715, 688, 594, 444, 255, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 234, 429, 586, 693, 731, 701, 605, 452, 258,
  38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 220, 416, 574, 682, 720, 667, 595, 341, 146, 37, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 33, 213, 409, 567, 673, 711, 681, 586, 435, 244, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 214,
  405, 561, 665, 703, 672, 580, 430, 239, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 212, 404, 560, 663, 700, 667,
  573, 423, 235, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 206, 396, 550, 650, 687, 656, 565, 416, 229, 43, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 200, 390, 544, 645, 683, 653, 563, 414, 227, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 23, 201, 393, 549, 652, 689, 660, 566, 415, 226, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 49, 190, 194,
  252, 310, 623, 480, 15, 142, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 188, 380, 542, 644, 682, 453, 300, 348,
  106, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 194, 387, 544, 644, 684, 655, 561, 411, 222, 36, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 17, 190, 381, 536, 638, 676, 647, 554, 404, 217, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  188, 380, 536, 638, 676, 647, 552, 402, 214, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 185, 378, 535, 639, 677,
  649, 555, 405, 216, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 245, 357, 560, 527, 614, 540, 389, 204, 27, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 40, 236, 375, 362, 297, 411, 246, 142, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 44, 337, 486, 529, 305, 183, 87, 368, 190, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 334, 391, 241,
  488, 592, 503, 224, 185, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 152, 334, 490, 595, 631, 604, 417, 369, 190,
  22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 152, 335, 489, 590, 629, 602, 513, 368, 189, 22, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 154, 338, 490, 592, 631, 607, 517, 373, 192, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 331,
  484, 587, 627, 601, 509, 366, 186, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 320, 472, 576, 615, 589, 503,
  361, 182, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 145, 330, 483, 585, 621, 596, 507, 365, 186, 19, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 326, 480, 582, 622, 597, 506, 364, 185, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 137, 319, 472, 573, 617, 592, 505, 360, 181, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 314, 470, 574, 618,
  593, 506, 361, 182, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 270, 341, 473, 468, 563, 404, 218, 80, 7, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 302, 454, 557, 600, 578, 486, 45, 112, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 67, 188, 340, 403, 582, 460, 334, 246, 63, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 19, 213, 283, 272,
  94, 102, 110, 55, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 294, 443, 544, 586, 459, 479, 340, 125, 7, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 103, 301, 60, 28, 25, 142, 250, 136, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 17, 52, 141, 547, 591, 347, 327, 165, 172, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 111, 291, 448, 554,
  601, 580, 495, 355, 178, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 111, 289, 439, 539, 582, 560, 480, 343, 98, 15,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 284, 438, 542, 586, 556, 486, 349, 174, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 107, 288, 443, 549, 593, 577, 494, 355, 178, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 286,
  444, 551, 603, 577, 494, 356, 180, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 280, 431, 536, 582, 560, 476, 12,
  170, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 270, 427, 285, 441, 555, 244, 184, 55, 7, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 95, 273, 431, 538, 585, 567, 489, 354, 180, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93,
  273, 432, 540, 592, 575, 494, 354, 180, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 261, 422, 529, 576, 562,
  483, 349, 177, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 168, 45, 389, 334, 202, 59, 98, 173, 18, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 274, 432, 541, 590, 574, 495, 360, 186, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 89, 266, 423, 528, 577, 562, 485, 352, 182, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 261, 415, 523, 570,
  422, 396, 288, 182, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 84, 264, 422, 533, 584, 570, 491, 358, 186, 21, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 265, 425, 536, 583, 569, 491, 357, 185, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 50, 159, 292, 510, 560, 550, 479, 353, 186, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 246, 140,
  447, 348, 358, 481, 351, 183, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 252, 410, 521, 569, 558, 482, 276,
  100, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 244, 401, 453, 561, 550, 478, 350, 184, 25, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 79, 260, 421, 535, 589, 578, 391, 366, 163, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78,
  259, 420, 534, 588, 578, 504, 296, 173, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 249, 407, 517, 571, 462,
  475, 266, 147, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 57, 207, 171, 286, 359, 462, 175, 149, 30, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 37, 62, 307, 427, 345, 237, 354, 310, 87, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 11, 50, 42, 69, 135, 236, 94, 286, 189, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 18, 158, 97, 179, 152,
  269, 229, 7, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 239, 402, 520, 577, 570, 471, 374, 190, 39, 0, 0, 0, 0,
  0, 0, 0,
]

export default data
