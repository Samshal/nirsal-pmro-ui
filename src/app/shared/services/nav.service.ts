import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	constructor() {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebarMainMenu = false;
			this.collapseSidebarSecondMenu = true;
		}
	}
	
	public openclass: boolean = false;
	public screenWidth: any;

	public collapseSidebarMainMenu = false;
	public collapseSidebarSecondMenu = false;

	// For Horizontal Layout Mobile
	public horizontal: boolean = window.innerWidth < 991 ? false : true;
	
	public fullScreen = false;

	MENUITEMS: Menu[] = [
		{
			title: 'T & C', path: '/agc-application/terms-and-conditions', icon: 'home', type: 'sub', active: true, badgeType: 'info', badgeValue:'In progress',  children:
				[
					{
						title: 'Terms and Conditions', type: 'sub', active: true, children: [
							{ path: '/agc-application/terms-and-conditions', title: '&#10003; T & C Attestation', type: 'link' }
						]
					}
				],
		},
		{
			title: 'Know your Leader (KYL)', path: '/agc-application/know-your-leader/president', icon: 'home', type: 'sub', active: true, badgeType: 'warning', badgeValue:'Step 2',  children:
				[
					{
						title: 'Know Your Leader', type: 'sub', active: true, children: [
							{ path: '/agc-application/know-your-leader/president', title: '&#10003; President (KYL)', type: 'link' },
							{ path: '/agc-application/know-your-leader/vice-president', title: '- Vice President (KYL)', type: 'link' },
							{ path: '/agc-application/know-your-leader/director-of-finance', title: '- Director of Finance (KYL)', type: 'link' },
							{ path: '/agc-application/know-your-leader/kyl-summary', title: '- KYL Summary', type: 'link' }
						]
					}
				],
		},
		{
			title: 'Know your Customer (KYC)', path: '/agc-application/know-your-customer', icon: 'home', type: 'sub', active: true, badgeType: 'warning', badgeValue:'Step 3',  children:
				[
					{
						title: 'Know Your Customer', type: 'sub', active: true, children: [
							{ path: '/agc-application/know-your-customer/agc-information', title: '&#10003; AGC Information', type: 'link' },
							{ path: '/agc-application/know-your-customer/bvn-verification', title: '- BVN Verification', type: 'link' },
							{ path: '/agc-application/know-your-customer/crc', title: '- Credit Risk Check', type: 'link' }
						]
					}
				],
		},
		{
			title: 'Know your Farm (KYF)', path: '/agc-application/know-your-farm', icon: 'home', type: 'sub', active: true, badgeType: 'warning', badgeValue:'Step 4',  children:
				[
					{
						title: 'Home', type: 'sub', active: true, children: [
							{ path: '/agc-application/know-your-farm/farmers-allocation', title: 'Farm Allocations', type: 'link' },
							{ path: '/agc-application/know-your-farm/farm-boundary', title: 'Farm Boundary', type: 'link' }
						]
					}
				],
		},
		{
			title: 'Know your AGC (KYAGC)', path: '/agc-application/know-your-agc', icon: 'home', type: 'sub', active: true, badgeType: 'warning', badgeValue:'Step 5',  children:
				[
					{
						title: 'AGC', type: 'sub', active: true, children: [
							{ path: '/agc-application/know-your-agc/parcelization-viewer', title: 'Farm Parcels', type: 'link' },
							{ path: '/agc-application/know-your-agc/vast-id', title: 'VAsT ID', type: 'link' }
						]
					}
				],
		}
	];
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}


}
