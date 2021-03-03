/**
 * Small World
 *   Given a list of points in the plane, write a program that outputs each point along with the three other points that are closest to it.
 *   These three points should be ordered by distance.
 *
 * For example, given a set of points where each line is of the form: ID x-coordinate y-coordinate
 *
 * 1  0.0      0.0
 * 2  10.1     -10.1
 * 3  -12.2    12.2
 * 4  38.3     38.3
 * 5  79.99    179.99
 *
 *
 * Your program should output:
 *
 * 1 2,3,4
 * 2 1,3,4
 * 3 1,2,4
 * 4 1,2,3
 * 5 4,3,1 
 **/
using System;
using System.Collections;

namespace Hexacta
{
	class Point
	{
		public double x;
		public double y;
		public Point()
		{
			this.x = 0.0;
			this.y = 0.0;
		}
		public Point(double x, double y)
		{
			this.x = x;
			this.y = y;
		}
		public double GetDistance(Point pnt)
		{
			return Math.Sqrt(Math.Pow(pnt.x, 2.0) + Math.Pow(pnt.y, 2.0));
		}
	}
	class Program
	{
		private static void Main(string[] args)
		{
			var p = new Point[5];
			p[0] = new Point(0.0, 0.0);
			p[1] = new Point(10.1, -10.1);
			p[2] = new Point(-12.2, 12.2);
			p[3] = new Point(38.3, 38.3);
			p[4] = new Point(79.99, 79.99);

			for (var i = 0; i < p.Length; i++)

			{
				Hashtable ht = new Hashtable();
				for (var j = 0; j < p.Length; j++)
				{
					if (i != j)
					{
						ht.Add(j + 1, p[i].GetDistance(p[j]));
					}
				}
				if (ht.Count != 0)
				{
					var points = Array.CreateInstance(typeof(int), ht.Count);
					ht.Keys.CopyTo(points, 0);
					var distance = Array.CreateInstance(typeof(double), ht.Count);
					ht.Values.CopyTo(distance, 0);
					Array.Sort(distance, points);

					Console.Write(i + 1 + " ");

					for (var j = 0; j < 3; j++)
					{
						if (j < 2)
						{
							Console.Write(points.GetValue(j) + ",");
						}
						else
						{
							Console.Write(points.GetValue(j).ToString());
						}
					}
					Console.WriteLine();
				}
			}
			Console.Write("hit enter to end the process");
			Console.ReadLine();
		}
	}
}
